from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

model = joblib.load("Student_dataset.pkl")

# Recommendation logic
def generate_recommendation(age, stress_level):


    if stress_level == "High":
        if age <=1 & age >=5:
            sleep = 12
            return sleep
        elif age <=6 & age>=12:
            sleep = 11
            return sleep
        elif age <=13 & age >=18:
            sleep = 10
            return sleep
        else:
            sleep = 9
            return sleep

    elif stress_level == "Moderate":
        if age <=1 & age >=5:
            sleep = 11
            return sleep
        elif age <=6 & age>=12:
            sleep = 10
            return sleep
        elif age <=13 & age >=18:
            sleep = 9
            return sleep
        else:
            sleep = 8
            return sleep

    else:  # Low
        if age <=1 & age >=5:
            sleep = 10
            return sleep
        elif age <=6 & age>=12:
            sleep = 9
            return sleep
        elif age <=13 & age >=18:
            sleep = 8
            return sleep
        else:
            sleep = 7
            return sleep

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    age = int(data["age"])

    features = np.array([[
        float(data["study"]),
        float(data["extra"]),
        float(data["sleep"]),
        float(data["social"]),
        float(data["activity"]),
        float(data["gpa"])
    ]])

    prediction = model.predict(features)[0]
    labels = {0: "Low", 1: "Moderate", 2: "High"}
    stress_label = labels[prediction]

    recommendation = generate_recommendation(age, stress_label)

    return jsonify({
        "stress": stress_label,
        "recommendation": recommendation
    })

if __name__ == "__main__":
    app.run(debug=True)
