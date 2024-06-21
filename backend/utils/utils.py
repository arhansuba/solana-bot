import jwt
from datetime import datetime, timedelta
from flask import request, jsonify, current_app
from functools import wraps
from werkzeug.security import generate_password_hash, check_password_hash
from .models import User

# Function to generate JWT token
def generate_token(user_id):
    try:
        payload = {
            'exp': datetime.utcnow() + timedelta(days=1),
            'iat': datetime.utcnow(),
            'sub': user_id
        }
        return jwt.encode(payload, current_app.config['SECRET_KEY'], algorithm='HS256')
    except Exception as e:
        return str(e)

# Function to decode JWT token
def decode_token(token):
    try:
        payload = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=['HS256'])
        return payload['sub']
    except jwt.ExpiredSignatureError:
        return 'Signature expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'

# Decorator function to check JWT token for authentication
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split()[1]

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        try:
            user_id = decode_token(token)
            current_user = User.objects.get(id=user_id)
        except Exception as e:
            return jsonify({'message': str(e)}), 401

        return f(current_user, *args, **kwargs)

    return decorated

# Function to hash password
def hash_password(password):
    return generate_password_hash(password)

# Function to verify password hash
def verify_password(password_hash, password):
    return check_password_hash(password_hash, password)

# Other utility functions can be added as needed...

