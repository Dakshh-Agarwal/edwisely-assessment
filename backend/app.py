from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "Backend is live!"})

@app.route("/api/test")
def test():
    return jsonify({"status": "ok", "data": "Hello from Flask"})

if __name__ == "__main__":
    app.run(debug=True)