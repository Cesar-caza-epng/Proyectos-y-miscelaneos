from flask import Flask, jsonify, request
from deepface import DeepFace
from flask_cors import CORS
import numpy as np
import cv2

app = Flask(__name__)
CORS(app)

@app.route('/')
def mein():
    return "Deteccion de emociones faciales"

@app.route("/detect", methods=["POST"])
def detectar():
    if "file" not in request.files:
        return jsonify({"Error": "No se pudo encontrar una imagen"}), 400
    
    arch = request.files["file"]

    if arch.filename == "":
        return jsonify({"Error": "No se pudo encontrar una imagen"}), 400
    
    nparr = np.frombuffer(arch.read(), np.uint8)
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    RGB = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    result = DeepFace.analyze(RGB, actions=['emotion'])

    return jsonify(result[0]["dominant_emotion"])

if __name__ == "__main__":
    app.run(debug=True)
