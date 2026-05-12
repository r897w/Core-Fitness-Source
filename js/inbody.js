
document.addEventListener("DOMContentLoaded", function () {

const goals = {
  cutting: {
    label: "Cutting",
    inbodyAdvice: "Your result suggests Cutting. Click the goal box to view your goal guide."
  },

  maintenance: {
    label: "Maintenance",
    inbodyAdvice: "Your result suggests Maintenance. Click the goal box to view your goal guide."
  },

  bulking: {
    label: "Bulking",
    inbodyAdvice: "Your result suggests Bulking. Click the goal box to view your goal guide."
  }
};


  function getGoalFromStats(bodyFat, muscleMass, weight) {
    const musclePercent = (muscleMass / weight) * 100;

    if (bodyFat >= 28) {
      return "cutting";
    }

    if (bodyFat <= 18 || musclePercent < 32) {
      return "bulking";
    }

    return "maintenance";
  }

  function saveResult(goalKey, bodyFat, muscleMass, weight) {
    localStorage.setItem("recommendedGoal", goalKey);
    localStorage.setItem("bodyFat", bodyFat);
    localStorage.setItem("muscleMass", muscleMass);
    localStorage.setItem("weight", weight);
  }


  function showError(input, errorText, message) {
    input.classList.add("invalid-input");
    errorText.textContent = message;
    errorText.style.display = "block";
  }


  function clearError(input, errorText) {
    input.classList.remove("invalid-input");
    errorText.textContent = "";
    errorText.style.display = "none";
  }


  function validateInput(input, errorText, min, max, name) {
    const value = Number(input.value);

    if (input.value === "") {
      showError(input, errorText, name + " is required");
      return false;
    }

    if (value < 0) {
      showError(input, errorText, name + " cannot be negative");
      return false;
    }

    if (value < min || value > max) {
      showError(input, errorText, name + " must be between " + min + " and " + max);
      return false;
    }

    clearError(input, errorText);
    return true;
  }


  const analyzeBtn = document.getElementById("analyzeBtn");

  const bodyFatInput = document.getElementById("bodyFat");
  const muscleMassInput = document.getElementById("muscleMass");
  const weightInput = document.getElementById("weight");

  const bodyFatError = document.getElementById("bodyFatError");
  const muscleMassError = document.getElementById("muscleMassError");
  const weightError = document.getElementById("weightError");

  const inbodyGoalBox = document.getElementById("goalBox");
  const inbodyAdviceText = document.getElementById("adviceText");



  bodyFatInput.addEventListener("blur", function () {
    validateInput(bodyFatInput, bodyFatError, 2, 60, "Body Fat");
  });

  muscleMassInput.addEventListener("blur", function () {
    validateInput(muscleMassInput, muscleMassError, 10, 70, "Muscle Mass");
  });

  weightInput.addEventListener("blur", function () {
    validateInput(weightInput, weightError, 20, 300, "Weight");
  });


  analyzeBtn.addEventListener("click", function () {
    const bodyFatValid = validateInput(bodyFatInput, bodyFatError, 2, 60, "Body Fat");
    const muscleMassValid = validateInput(muscleMassInput, muscleMassError, 10, 70, "Muscle Mass");
    const weightValid = validateInput(weightInput, weightError, 20, 300, "Weight");


    if (bodyFatValid === false || muscleMassValid === false || weightValid === false) {
      inbodyGoalBox.textContent = "Invalid Input";
      inbodyAdviceText.textContent = "Please correct the red fields before analyzing.";
      inbodyAdviceText.classList.add("error-message");
      return;
    }

    inbodyAdviceText.classList.remove("error-message");

    const bodyFat = Number(bodyFatInput.value);
    const muscleMass = Number(muscleMassInput.value);
    const weight = Number(weightInput.value);

    const goalKey = getGoalFromStats(bodyFat, muscleMass, weight);
    const goal = goals[goalKey];

    saveResult(goalKey, bodyFat, muscleMass, weight);

    inbodyGoalBox.textContent = goal.label;
    inbodyAdviceText.textContent = goal.inbodyAdvice;

    inbodyGoalBox.classList.add("goal-clickable");
  });

  inbodyGoalBox.addEventListener("click", function () {
    const savedGoal = localStorage.getItem("recommendedGoal");


    if (savedGoal) {
      window.location.href = "goalguide.html?from=inbody";
    }
  });

});