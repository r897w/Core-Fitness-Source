  // ---------------- home.html ----------------

    document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcomeMessage");
    const hour = new Date().getHours();

    if (hour < 12) {
      welcomeMessage.textContent = "Good morning, ready to start your fitness journey?";
    } else if (hour < 18) {
      welcomeMessage.textContent = "Good afternoon, keep moving toward your goal!";
    } else {
      welcomeMessage.textContent = "Good evening, plan your workout for tomorrow!";
    }

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        button.textContent = "Opening...";
      });
    });
  });