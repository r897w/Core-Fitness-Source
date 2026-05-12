  // ---------------- exercises.html ----------------

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const filterSelect = document.getElementById("filterSelect");
  const cards = document.querySelectorAll(".card");
  const grid = document.querySelector(".grid");

  const noResultMessage = document.createElement("div");
  noResultMessage.className = "no-result-message";
  noResultMessage.innerHTML = `
    <img src="images/not-found.jpg" alt="Equipment Not Found" class="not-found-img">`;
  noResultMessage.style.display = "none";
  grid.after(noResultMessage);

  function filterExercises() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedType = filterSelect.value;
    let visibleCount = 0;

    cards.forEach(function (card) {
      const title = card.querySelector("h2").textContent.toLowerCase();
      const cardType = card.getAttribute("data-type");

      const matchesSearch = title.includes(searchValue);
      const matchesType = selectedType === "all" || cardType === selectedType;

      if (matchesSearch && matchesType) {
        card.style.display = "inline-grid";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    noResultMessage.style.display = visibleCount === 0 ? "block" : "none";
  }

  searchInput.addEventListener("input", function () {
    searchInput.value = searchInput.value.replace(/[0-9]/g, "");
    filterExercises();
  });

  filterSelect.addEventListener("change", filterExercises);

  const exerciseButtons = document.querySelectorAll(".exercise-buttons button");

  exerciseButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const selectedExercise = button.getAttribute("data-exercise");

      let visibleCount = 0;

     cards.forEach(function (card) {

      const title = card.querySelector("h2").textContent;

      if (selectedExercise === "all" || title === selectedExercise) {

        card.style.display = "inline-grid";
        visibleCount++;

      } else {

        card.style.display = "none";

      }

    });

    noResultMessage.style.display =
      visibleCount === 0 ? "block" : "none";

  });

});

});