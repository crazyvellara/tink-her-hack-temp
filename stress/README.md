<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
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
- Feature 1: [Description]
- Feature 2: [Description]
- Feature 3: [Description]
- Feature 4: [Description]

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
<img width="1919" height="1029" alt="image" src="https://github.com/user-attachments/assets/d593f69d-0ecc-4e1e-9c5d-6ea82f9d37f8" />
-

![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

#### Diagrams
+------------------+
|      User        |
| (Web Browser)    |
+---------+--------+
          |
          v
+------------------+
|   Frontend       |
| HTML | CSS | JS  |
+---------+--------+
          |
          |  HTTP POST (JSON)
          v
+------------------+
|   Flask Backend  |
|   (app.py)       |
+---------+--------+
          |
          v
+------------------+
|  ML Model (.pkl) |
| Decision Tree    |
+------------------+


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

![Workflow](docs/workflow.png)
*Add caption explaining your workflow*

---



---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

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
[Add your demo video link here - YouTube, Google Drive, etc.]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
