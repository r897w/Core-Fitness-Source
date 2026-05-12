  // ---------------- equipment.html ----------------

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const filterSelect = document.getElementById("filterSelect");
  const cards = document.querySelectorAll(".card");
  const grid = document.querySelector(".grid");

  const noResultMessage = document.createElement("p");
  noResultMessage.className = "no-result-message";
  noResultMessage.innerHTML = `<img src="images/not-found.jpg" alt="Equipment Not Found" class="not-found-img">`;
  noResultMessage.style.display = "none";
  grid.after(noResultMessage);

  searchInput.addEventListener("input", function () {
    searchInput.value = searchInput.value.replace(/[0-9]/g, "");
    filterEquipment();
  });

  function filterEquipment() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedType = filterSelect.value;
    let visibleCount = 0;

    cards.forEach(function (card) {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const cardType = card.getAttribute("data-type");

      const matchesSearch = title.includes(searchValue);
      const matchesType = selectedType === "all" || cardType === selectedType;

      if (matchesSearch && matchesType) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (visibleCount === 0) {
      noResultMessage.style.display = "block";
    } else {
      noResultMessage.style.display = "none";
    }
  }

  filterSelect.addEventListener("change", filterEquipment);

const equipmentButtons = document.querySelectorAll(".equipment-buttons button");

equipmentButtons.forEach(function (button) {
  button.addEventListener("click", function () {

    const selected = button.getAttribute("data-equipment");
    let visibleCount = 0;

    cards.forEach(function (card) {
      const title = card.querySelector("h3").textContent;

      if (selected === "all" || title === selected) {
        card.style.display = "flex";
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