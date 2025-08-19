from flask import Flask, jsonify
from flask_lambda import FlaskLambda

app = FlaskLambda(__name__)

@app.route('/api/hello')
def hello():
    return jsonify(message="Hello from Flask backend on Netlify!")