function predictStress() {

    const age = document.getElementById("age").value;
    const study = document.getElementById("study").value;
    const extra = document.getElementById("extra").value;
    const sleep = document.getElementById("sleep").value;
    const social = document.getElementById("social").value;
    const activity = document.getElementById("activity").value;
    const gpa = document.getElementById("gpa").value;

    // Basic validation
    if (!age || !study || !extra || !sleep || !social || !activity || !gpa) {
        alert("Please fill all fields.");
        return;
    }

    const data = {
        age: age,
        study: study,
        extra: extra,
        sleep: sleep,
        social: social,
        activity: activity,
        gpa: gpa
    };

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {

        const resultText = document.getElementById("result");
        const recommendationText = document.getElementById("recommendation");
        const bar = document.getElementById("bar");

        // Show result label first
        resultText.innerHTML = "<strong>stress level:</strong> " + result.stress;

        // Show recommendation
        recommendationText.innerHTML = "<strong>Recommended sleep hours :</strong> " + result.recommendation + "<strong>hours</strong>";

        // Animate stress meter
        if (result.stress === "Low") {
            bar.style.width = "33%";
            bar.style.backgroundColor = "#4CAF50";
        }
        else if (result.stress === "Moderate") {
            bar.style.width = "66%";
            bar.style.backgroundColor = "#FFC107";
        }
        else {
            bar.style.width = "100%";
            bar.style.backgroundColor = "#F44336";
        }

        // Fade-in effect
        resultText.style.opacity = 0;
        recommendationText.style.opacity = 0;

        setTimeout(() => {
            resultText.style.transition = "opacity 0.5s ease";
            recommendationText.style.transition = "opacity 0.5s ease";
            resultText.style.opacity = 1;
            recommendationText.style.opacity = 1;
        }, 100);
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong. Check server.");
    });
}
