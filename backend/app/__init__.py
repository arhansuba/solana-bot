from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)

# Import and register blueprints
from app.routes import auth, projects, tools
app.register_blueprint(auth.bp)
app.register_blueprint(projects.bp)
app.register_blueprint(tools.bp)

if __name__ == '__main__':
    app.run()
