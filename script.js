document.getElementById("riskForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // convert cm to meters
  const bmi = weight / (height * height);

  const smoking = document.getElementById("smoking").value;
  const activity = document.getElementById("activity").value;
  const chronic = document.getElementById("chronic").value;

  let riskScore = 0;

  // BMI Risk
  if (bmi < 18.5 || bmi > 30) riskScore += 2;
  else if (bmi >= 25 && bmi <= 30) riskScore += 1;

  // Age
  if (age > 60) riskScore += 2;
  else if (age >= 40) riskScore += 1;

  // Smoking
  if (smoking === "yes") riskScore += 2;

  // Physical activity
  if (activity === "low") riskScore += 2;
  else if (activity === "moderate") riskScore += 1;

  // Chronic illness
  if (chronic === "yes") riskScore += 2;

  const result = document.getElementById("riskResult");
  const recommendation = document.getElementById("recommendation");
  const resultBox = document.getElementById("resultBox");

  let level = "";
  let message = "";

  if (riskScore <= 2) {
    level = "🟢 Low Risk";
    message = "You are in good health! Keep maintaining a healthy lifestyle.";
  } else if (riskScore <= 5) {
    level = "🟠 Moderate Risk";
    message = "Some factors need attention. Consider regular check-ups.";
  } else {
    level = "🔴 High Risk";
    message = "Your health may be at risk. Please consult a doctor soon.";
  }

  result.textContent = level;
  recommendation.textContent = message;
  resultBox.style.display = "block";
});