import os
from flask import Flask, request, jsonify
import google.generativeai as genai

app = Flask(__name__)

# Récupère la clé API depuis les réglages de Render
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
model = genai.GenerativeModel('gemini-pro')

@app.route('/update', methods=['POST'])
def update():
    data = request.json
    distance = data.get('distance', 500)
    
    # L'IA génère un discours unique
    prompt = f"Tu es une sentinelle IA protectrice. Un objet est à {distance}cm. Dis une phrase courte et humaine à l'utilisateur."
    response = model.generate_content(prompt)
    
    return jsonify({
        "message": response.text,
        "zoom": True if distance < 50 else False,
        "alerte": True if distance < 10 else False
    })

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
