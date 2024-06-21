from flask import Blueprint, jsonify

bp = Blueprint('projects', __name__, url_prefix='/projects')

@bp.route('/create', methods=['POST'])
def create_project():
    # Logic to create a new Solana project
    return jsonify({'message': 'Creating a new Solana project'}), 200
