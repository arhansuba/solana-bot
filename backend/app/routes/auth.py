from flask import Blueprint, request, jsonify, current_app
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

from app.models import User  # Assuming you have a User model defined
from app import db

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/register', methods=['POST'])
def register():
    data = request.json

    # Check if username or email already exists
    if User.query.filter_by(username=data['username']).first() is not None:
        return jsonify({'error': 'Username already exists'}), 400

    if User.query.filter_by(email=data['email']).first() is not None:
        return jsonify({'error': 'Email address already registered'}), 400

    # Create new user
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = User(username=data['username'], email=data['email'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.json

    user = User.query.filter_by(username=data['username']).first()

    if user and check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401

@bp.route('/logout', methods=['POST'])
@jwt_required()  # Requires valid access token to access this route
def logout():
    # Implement logout functionality if needed (e.g., token blacklist)
    # Example: remove token from blacklist or add to expired list
    return jsonify({'message': 'Logged out successfully'}), 200
