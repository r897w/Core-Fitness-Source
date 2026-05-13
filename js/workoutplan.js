document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const goalFromUrl = urlParams.get("goal");
  const planCards = document.querySelectorAll(".plan-card");

  function scrollToElement(element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - 120,
      behavior: "smooth"
    });
  }

  planCards.forEach(function (card) {
    card.style.border = "";
    card.style.boxShadow = "";
    card.style.transform = "";
    card.style.transition = "all 0.3s ease";

    if (goalFromUrl && card.getAttribute("data-goal") === goalFromUrl) {
      card.style.border = "3px solid #c2185b";
      card.style.boxShadow =
        "0 0 16px rgba(194, 24, 91, 0.75), 0 0 32px rgba(194, 24, 91, 0.50), 0 0 48px rgba(194, 24, 91, 0.30)";
      card.style.transform = "scale(1.02)";

      setTimeout(function () {
        scrollToElement(card);
      }, 300);
    }
  });

  const exerciseLinks = {
    "Bench Press": "https://youtu.be/pCGVSBk0bIQ",
    "Chest Fly": "https://youtu.be/rnV3y1P7894",
    "Lat Pulldown": "https://youtu.be/AvYZZhEl7Xk",
    "Pull-Up": "https://youtu.be/w_yuTRQd6HA",
    "Barbell Row": "https://youtu.be/tS5lKXxtNvE",
    "Plank": "https://youtu.be/o4LGPtKjbhU",
    "Squat Rack": "https://youtu.be/JRzV9zjDLP4",
    "Leg Press": "https://youtu.be/0nrW-q7-WRQ",
    "Barbell RDL": "https://youtu.be/Q-2telZDPRw",
    "Calf Press": "https://youtu.be/s8yUXsZrgE0",
    "Cable Crunch": "https://youtu.be/N9n6a1MkwpU",
    "Russian Twist": "https://youtu.be/99T1EfpMwPA?si=vdvaKD6bAxlEQesf",
    "Mountain Climbers": "https://youtu.be/pmS2h9PQgiI",
    "Bicycle Crunch": "https://youtu.be/qM3T5gO6lIo",
    "Crunches": "https://youtu.be/AzS8IpnELbc"
  };

  const workoutDays = {
    bulking: {
      day1: [
        ["Bench Press", "4", "8"],
        ["Chest Fly", "3", "10"],
        ["Lat Pulldown", "4", "10"],
        ["Pull-Up", "3", "Max"],
        ["Barbell Row", "3", "8"],
        ["Plank", "3", "45 sec"]
      ],
      day2: [
        ["Squat Rack", "4", "8"],
        ["Leg Press", "4", "10"],
        ["Barbell RDL", "4", "8"],
        ["Calf Press", "3", "15"],
        ["Cable Crunch", "3", "12"]
      ],
      day3: [
        ["Bench Press", "3", "8"],
        ["Squat Rack", "3", "8"],
        ["Lat Pulldown", "3", "10"],
        ["Barbell Row", "3", "8"],
        ["Leg Press", "3", "12"],
        ["Russian Twist", "3", "20"]
      ]
    },

    cutting: {
      day1: [
        ["Bench Press", "3", "12"],
        ["Lat Pulldown", "3", "12"],
        ["Chest Fly", "3", "15"],
        ["Pull-Up", "3", "Max"],
        ["Mountain Climbers", "3", "30 sec"]
      ],
      day2: [
        ["Squat Rack", "4", "10"],
        ["Leg Press", "4", "15"],
        ["Barbell RDL", "3", "12"],
        ["Bicycle Crunch", "3", "20"]
      ],
      day3: [
        ["Bench Press", "3", "10"],
        ["Lat Pulldown", "3", "12"],
        ["Leg Press", "3", "12"],
        ["Barbell Row", "3", "10"],
        ["Plank", "3", "45 sec"]
      ]
    },

    maintenance: {
      day1: [
        ["Bench Press", "3", "10"],
        ["Lat Pulldown", "3", "10"],
        ["Leg Press", "3", "12"],
        ["Plank", "3", "40 sec"]
      ],
      day2: [
        ["Squat Rack", "3", "8"],
        ["Chest Fly", "3", "12"],
        ["Pull-Up", "3", "Max"],
        ["Crunches", "3", "15"]
      ],
      day3: [
        ["Barbell Row", "3", "10"],
        ["Bench Press", "3", "10"],
        ["Leg Press", "3", "12"],
        ["Lat Pulldown", "3", "10"],
        ["Russian Twist", "3", "20"]
      ]
    }
  };

  const cardioLinks = {
    "Treadmill": "https://youtu.be/9ccVxEvWtpA?si=mzDe379IuGb5M452",
    "Exercise Bike": "https://youtu.be/0qXAG_ljuKc?si=HFm0jJe4V9SG7XSO",
    "Rowing Machine": "https://youtu.be/6_eLpWiNijE?si=MI-tta4pw1Nh2odu",
    "Stair Climber": "https://youtu.be/Zn1O9LcKW9E?si=GJGkrGh2ygo8jpwv"
  };

  const cardioPlans = {
    cutting: [
      ["Treadmill", "20 min", "Incline 6–8"],
      ["Exercise Bike", "15 min", "Resistance 5–6"],
      ["Stair Climber", "10 min", "Level 5–7"],
      ["Rowing Machine", "10 min", "Resistance 5"]
    ],
    bulking: [
      ["Treadmill", "10 min", "Incline 3–5"],
      ["Exercise Bike", "10 min", "Resistance 4–5"],
      ["Rowing Machine", "10 min", "Resistance 4"],
      ["Stair Climber", "5–10 min", "Level 4–5"]
    ],
    maintenance: [
      ["Treadmill", "15 min", "Incline 5–6"],
      ["Exercise Bike", "15 min", "Resistance 5"],
      ["Rowing Machine", "10 min", "Resistance 5"],
      ["Stair Climber", "10 min", "Level 5–6"]
    ]
  };

  const tips = {
    cutting:
      "Keep rest short, around 45–60 seconds. Focus on high-protein meals, drink enough water, and use light to moderate weights with good form.",
    bulking:
      "Increase weights gradually every week. Rest 60–90 seconds between sets, eat enough calories and protein, and creatine can be used as an optional supplement to support strength and muscle performance.",
    maintenance:
      "Use moderate weights and stay consistent. Focus on good form, balanced meals, enough sleep, and proper recovery. Creatine can be optional to help maintain strength and workout performance."
  };

  function closeOpenBox(planCard) {
    const openBox = planCard.querySelector(".workout-day-box, .cardio-box, .tip-message");

    if (openBox) {
      openBox.classList.remove("show-workout", "show-cardio", "show-tip");

      setTimeout(function () {
        openBox.remove();
      }, 300);
    }
  }

  function createExerciseLink(name) {
    const link = exerciseLinks[name] || "#";

    return `
      <a class="exercise-link" href="${link}" target="_blank">
        ${name}
      </a>
    `;
  }

  function createCardioLink(name) {
    const link = cardioLinks[name] || "#";

    return `
      <a class="exercise-link" href="${link}" target="_blank">
        ${name}
      </a>
    `;
  }

  // Day buttons
  const dayButtons = document.querySelectorAll(".day-btn");

  dayButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      const planCard = button.closest(".plan-card");
      const goal = planCard.getAttribute("data-goal");
      const dayKey = "day" + (index % 3 + 1);
      const dayNumber = index % 3 + 1;

      const currentBox = planCard.querySelector(".workout-day-box");

      if (currentBox && currentBox.dataset.day === dayKey) {
        closeOpenBox(planCard);
        return;
      }

      closeOpenBox(planCard);

      setTimeout(function () {
        const exercises = workoutDays[goal][dayKey];

        const workoutBox = document.createElement("div");
        workoutBox.className = "workout-day-box";
        workoutBox.dataset.day = dayKey;

        workoutBox.innerHTML = `
          <h3 class="workout-day-title">DAY ${dayNumber}</h3>

          <div class="workout-table">
            <div class="workout-row workout-header">
              <div>WORKOUT</div>
              <div>SETS</div>
              <div>REPS</div>
            </div>

            ${exercises
              .map(function (exercise) {
                return `
                  <div class="workout-row">
                    <div>${createExerciseLink(exercise[0])}</div>
                    <div>${exercise[1]}</div>
                    <div>${exercise[2]}</div>
                  </div>
                `;
              })
              .join("")}
          </div>
        `;

        planCard.appendChild(workoutBox);

        setTimeout(function () {
          workoutBox.classList.add("show-workout");
          scrollToElement(workoutBox);
        }, 10);
      }, 300);
    });
  });

  // Cardio buttons
  const cardioButtons = document.querySelectorAll(".main-action-btn");

  cardioButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const planCard = button.closest(".plan-card");
      const goal = planCard.getAttribute("data-goal");

      const currentBox = planCard.querySelector(".cardio-box");

      if (currentBox) {
        closeOpenBox(planCard);
        return;
      }

      closeOpenBox(planCard);

      setTimeout(function () {
        const cardioExercises = cardioPlans[goal];

        const cardioBox = document.createElement("div");
        cardioBox.className = "cardio-box";

        cardioBox.innerHTML = `
          <h3 class="cardio-title">CARDIO</h3>

          <div class="cardio-table">
            <div class="cardio-row cardio-header">
              <div>EXERCISE</div>
              <div>DURATION</div>
              <div>RESISTANCE</div>
            </div>

            ${cardioExercises
              .map(function (cardio) {
                return `
                  <div class="cardio-row">
                    <div>${createCardioLink(cardio[0])}</div>
                    <div>${cardio[1]}</div>
                    <div>${cardio[2]}</div>
                  </div>
                `;
              })
              .join("")}
          </div>
        `;

        planCard.appendChild(cardioBox);

        setTimeout(function () {
          cardioBox.classList.add("show-cardio");
          scrollToElement(cardioBox);
        }, 10);
      }, 300);
    });
  });

  // Tips buttons
  const tipButtons = document.querySelectorAll(".tip-btn");

  tipButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const planCard = button.closest(".plan-card");
      const goal = planCard.getAttribute("data-goal");

      const currentBox = planCard.querySelector(".tip-message");

      if (currentBox) {
        closeOpenBox(planCard);
        return;
      }

      closeOpenBox(planCard);

      setTimeout(function () {
        const tipBox = document.createElement("div");
        tipBox.className = "tip-message";
        tipBox.textContent = tips[goal];

        planCard.appendChild(tipBox);

        setTimeout(function () {
          tipBox.classList.add("show-tip");
          scrollToElement(tipBox);
        }, 10);
      }, 300);
    });
  });
});