const sortButton = document.querySelector(".sort");
const filterButton = document.querySelector(".filter");
const sortOverlay = document.querySelector(".sort-overlay");
const filterOverlay = document.querySelector(".filter-overlay");
const sortApply = document.querySelector(".sort-button");
const filterApply = document.querySelector(".filter-button");
const criteriasMet = document.querySelector(".met-criterias");

sortButton.onclick = function viewSort() {
  sortOverlay.classList.remove("hiddenjs");
};

sortApply.onclick = function hideSort() {
  sortOverlay.classList.add("hiddenjs");
};

filterButton.onclick = function viewFilter() {
  filterOverlay.classList.remove("hiddenjs");
};

filterApply.onclick = function filterResults() {
  criteriasMet.classList.remove("hiddenjs");
};
