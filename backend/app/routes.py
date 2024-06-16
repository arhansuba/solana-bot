from flask import Blueprint, request, jsonify

main = Blueprint('main', __name__)

@main.route('/chat', methods=['POST'])
def chat():
    data = request.json
    # AI model processing logic here
    return jsonify({'response': 'This is a chatbot response'})
