<p align="center">
  <img width="1919" height="1029" alt="image" src="https://github.com/user-attachments/assets/d593f69d-0ecc-4e1e-9c5d-6ea82f9d37f8" />
</p>

## PROJECT: STRESS AND SLEEP HOURS PREDICTOR 

## Basic Details

## Team Name: SYNTAX SQUAD

## Team Members
- Member 1: JESNA C J - JYOTHI ENGINEERING COLLEGE THRISSUR
- Member 2: ANN MARIYA THOMAS - JYOTHI ENGINEERING COLLEGE THRISSUR

## Hosted Project Link
[mention your project hosted link here]

## Project Description
    A machine learning web application that predicts a student’s stress level using behavioral and academic inputs such as study hours, sleep, and GPA.The system combines a Decision Tree model with age-based recommendation logic to provide personalized stress management suggestions through an interactive web interface.


## The Problem statement
    Students often experience varying levels of stress due to academic workload, lifestyle imbalance, and limited rest.Identifying stress levels early is challenging without proper analysis of behavioral and academic factors.There is a need for a simple system that can predict stress levels using measurable daily activities.Additionally, the system should provide age-appropriate recommendations to help students manage and reduce stress effectively.


## The Solution
    This project solves the problem by using a machine learning model to analyze key lifestyle and academic factors such as study hours, sleep, physical activity, and GPA to predict a student’s stress level.It then combines the predicted stress level with the user’s age to generate personalized, age-appropriate recommendations for better stress management.The web-based interface makes the system easily accessible and user-friendly for students.By providing early stress identification and actionable guidance, the system helps promote healthier routines and balanced lifestyles.


## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: PYTHON,HTML,JAVA SCRIPT,CSS.
- Frameworks used: FLASH , SCIKIT-LEARN
- Libraries used: NUMPY,PANDAS,JOBLIB,SCIKIT-LEARN,FLASH
- Tools used: GOOGLE COLAB,VS CODE,GITHUB,WEB BROWSER


## Features

List the key features of your project:
- Feature 1: Machine Learning-Based Stress Prediction
Uses a trained Decision Tree model to analyze academic and lifestyle factors and predict stress levels (Low, Moderate, High).
- Feature 2: Age-Based Personalized Recommendations
Combines predicted stress level with user age to generate customized stress management suggestions.
- Feature 3: Interactive Web Interface
Provides a dynamic frontend with real-time prediction display and animated stress meter using HTML, CSS, and JavaScript.
- Feature 4: Full-Stack Integration
Seamlessly connects frontend inputs to a Flask backend and deployed ML model for real-time prediction and response handling.

---

## Implementation

### For Software:

#### Installation
1.pip install flask joblib numpy 

#### Run
python app.py


## Project Documentation

### For Software:

#### Screenshots 

<img width="738" height="449" alt="Screenshot 2026-02-14 074252" src="https://github.com/user-attachments/assets/ca1d798e-2487-44f7-a13c-9c2d0996499f" />
- we use descission tree as our trained model

<img width="1031" height="402" alt="Screenshot 2026-02-14 074212" src="https://github.com/user-attachments/assets/6fb2c4ba-e739-4074-a244-8c0cba12f6c6" />
-this is our models accuracy, we got 73% accuracy in our model , we also checked recoll,


<img width="1859" height="1096" alt="Screenshot 2026-02-14 074138" src="https://github.com/user-attachments/assets/f67d36a1-9506-4d61-9582-813d8ecf520f" />
- we code in vscode , having index.html,script.js, style.css and app.py, model student_dataset.pkl

#### Diagrams

<img width="420" height="772" alt="Screenshot 2026-02-14 064852" src="https://github.com/user-attachments/assets/1ab6c465-3e99-4c7b-a460-aed6ec369350" />


**System Architecture:**

![Architecture Diagram](docs/architecture.png)
The system consists of three main components:
Frontend (Client Side)
Built using HTML, CSS, and JavaScript. It collects user inputs such as age, study hours, sleep hours, GPA, etc., and displays the predicted stress level along with personalized recommendations.
Backend (Server Side)
Developed using Flask (Python). It handles incoming requests from the frontend, processes input data, loads the trained machine learning model, and returns prediction results in JSON format.
Machine Learning Model
A Decision Tree Classifier trained using Scikit-learn. The trained model is saved as a .pkl file and loaded into the Flask backend for real-time predictions.

The system follows this sequence:
The user enters input values on the web page.
JavaScript collects the data and sends it to the Flask backend using a POST request.
Flask receives the data and extracts the relevant features.
The backend passes the features to the trained Decision Tree model.
The model predicts the stress level (Low, Moderate, High).
The backend applies additional rule-based logic using age to generate personalized recommendations.
Flask sends the prediction and recommendation back to the frontend as a JSON response.
JavaScript updates the webpage dynamically to display:
   Result label
   Recommendation
   Animated stress meter

Tech Stack Interaction
We use decission tree as our model and train that with 73% acuraccy
downloaded that modelin pkl format
HTML structures the user interface.
CSS styles the webpage for a modern and responsive design.
JavaScript handles user interaction and communicates with the backend using Fetch API.
Flask acts as the bridge between frontend and machine learning model.
Scikit-learn provides the trained Decision Tree model for stress prediction.
NumPy formats input data into arrays compatible with the model.
Joblib loads the saved .pkl model file into memory.
Together, these technologies create a full-stack machine learning web application that integrates prediction logic with dynamic user interaction.


**Application Workflow:**

<img width="427" height="445" alt="Screenshot 2026-02-14 063649" src="https://github.com/user-attachments/assets/65ec32c2-a62f-4ead-9996-4f502c7343ac" />
simple, when user add input values the model predict the stress score and give stress level, which the applpy intrecept and give recomendation based on age and stress comparision

## Additional Documentation

#### Demo Output

**Input:**
```
 age= 19
 study hours= 8.1
 extracrricular activities= 0.6
 sleep hours= 6.5
 social hours = 2.2
 physical hours = 6.6
 gpa(out of 4)= 3.51
```

**Command:**
``` to run the code in vscode :- python app.py
```

**Output:**
```
 we will get answer:
   stress level = High
   Recomended sleep hours:9
   <img width="1915" height="1015" alt="image" src="https://github.com/user-attachments/assets/5d4b1076-5c62-4a86-815a-02e160ff01ac" />
```


## Project Demo

### Video
https://www.youtube.com/watch?v=W8Ag1jhqIuA

*Explains the working of our project from intializing, to giving input and final output recomamdations

### Additional Demos

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** ChatGPT

**Purpose:** 
-"to modify css code of our project"
-  "to inegrate model student_dataset.pkl to app.py (using flask)"
- "to push all code to github using vscode"

**Key Prompts Used:**
- "modify our basic code to something cool"
- "Step by step instructions to push all code to github from vscode"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom logic implementation
- Integration and testing
- UI/UX design decisions
- to generate the code for webpage modification such as updating css, flask.

---

## Team Contributions

- JESNA C.J: Specific contributions -  Frontend development, Backend developemnt, idea selection
- ANN MARIYA THOMAS: Specific contributions - Model traning, idea selection
  
---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
