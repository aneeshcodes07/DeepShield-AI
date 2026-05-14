from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    return jsonify({
        "prediction": "FAKE",
        "confidence": "96%"
    })

if __name__ == '__main__':
    app.run(debug=True)