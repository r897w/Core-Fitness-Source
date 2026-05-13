document.addEventListener("DOMContentLoaded", function () {

  const goals = {
    cutting: {
      label: "Cutting",
      workoutPage: "workoutplan.html?goal=cutting",
      guideIntro: "This goal is selected based on your body composition analysis.",
      guide: {
        goal: "Reduce body fat while keeping muscle.",
        focus: "Fat loss, cardio, and healthy meals.",
        training: "Strength training with cardio sessions.",
        nutrition: "Eat fewer calories than your body needs while keeping enough protein."
      }
    },


    maintenance: {
      label: "Maintenance",
      workoutPage: "workoutplan.html?goal=maintenance",
      guideIntro: "This goal is selected based on your body composition analysis.",
      guide: {
        goal: "Maintain your current body shape.",
        focus: "Balanced workouts and a healthy lifestyle.",
        training: "Combination of strength training and cardio.",
        nutrition: "Eat around your maintenance calories with enough protein and healthy meals."
      }
    },


    bulking: {
      label: "Bulking",
      workoutPage: "workoutplan.html?goal=bulking",
      guideIntro: "This goal is selected based on your body composition analysis.",
      guide: {
        goal: "Build muscle mass in a healthy way.",
        focus: "Strength training, protein, and enough calories.",
        training: "Weight lifting and progressive overload.",
        nutrition: "Eat more calories than your body needs with enough protein and healthy meals."
      }
    }
  };




  const guideGoalName = document.getElementById("goalName");

  const guideInfoIntro = document.getElementById("infoIntro");
  const guideGoalList = document.getElementById("goalList");
  const nextStepBox = document.getElementById("nextStepBox");

  const savedGoal = localStorage.getItem("recommendedGoal");
  const pageLink = window.location.href;
  const cameFromInBody = pageLink.includes("from=inbody");



  if (cameFromInBody === false || goals[savedGoal] === undefined) {
    guideGoalName.textContent = "Analyze First";

    guideInfoIntro.textContent = "Please complete your InBody analysis first to get your recommended goal.";

    guideGoalList.innerHTML = `
      <li>
        <strong>Step 1:</strong> Go to the InBody page.
        <a href="inbody.html" class="small-link">Go to InBody</a>
      </li>
      <li><strong>Step 2:</strong> Enter your body fat, muscle mass, and weight.</li>
      <li><strong>Step 3:</strong> Click Analyze to see your recommended goal.</li>
    `;

    nextStepBox.classList.add("hidden");
  } else {
    const goal = goals[savedGoal];

    guideGoalName.textContent = goal.label;
    guideInfoIntro.textContent = goal.guideIntro;

    guideGoalList.innerHTML = `
      <li><strong>Goal:</strong> ${goal.guide.goal}</li>
      <li><strong>Focus:</strong> ${goal.guide.focus}</li>
      <li><strong>Training Style:</strong> ${goal.guide.training}</li>
      <li><strong>Nutrition:</strong> ${goal.guide.nutrition}</li>
    `;

    nextStepBox.classList.remove("hidden");

    const workoutButton = nextStepBox.querySelector("a");
    if (workoutButton !== null) {
      workoutButton.href = goal.workoutPage;
    }
  }

});