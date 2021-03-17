const shopNav = document.querySelector(".shopNav");
const shopOverlay = document.querySelector(".overlay-shop");
const aboutNav = document.querySelector(".aboutNav");
const aboutOverlay = document.querySelector(".overlay-about");
const searchIcon = document.querySelector(".search-icon");
const searchbar = document.querySelector(".searchbar");
const closeButton = document.querySelector(".close-button");
const searchButton = document.querySelector(".search-button");
const searchPage = document.querySelector(".result-p");
const loaderContainer = document.querySelector(".loader-container");
const hiddenForSearch = document.querySelector(".hideforsearch");
const resultContainer = document.querySelector("#search-result");
const exitResultButton = document.querySelector(".exit-results");
const searchPhrase = document.querySelector("#input-search").value;
const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menuoverlay");
const main = document.querySelector("main");
const exitMenuButton = document.querySelector(".menu-close-button");

shopNav.onmouseover = function () {
  shopOverlay.classList.remove("hiddenjs");
};

shopOverlay.onmouseover = function () {
  shopOverlay.classList.remove("hiddenjs");
};

shopNav.onmouseout = function () {
  shopOverlay.classList.add("hiddenjs");
};

shopOverlay.onmouseout = function () {
  shopOverlay.classList.add("hiddenjs");
};

aboutNav.onmouseover = function () {
  aboutOverlay.classList.remove("hiddenjs");
};

aboutOverlay.onmouseover = function () {
  aboutOverlay.classList.remove("hiddenjs");
};

aboutNav.onmouseout = function () {
  aboutOverlay.classList.add("hiddenjs");
};

aboutOverlay.onmouseout = function () {
  aboutOverlay.classList.add("hiddenjs");
};

searchIcon.onclick = function () {
  searchbar.classList.remove("hiddenjs");
  return false;
};

closeButton.onclick = function () {
  searchbar.classList.add("hiddenjs");
  return false;
};

searchButton.onclick = function Search() {
  hiddenForSearch.classList.add("hiddenjs");
  resultContainer.classList.remove("hiddenjs");
  const searchPhrase = document.querySelector("#input-search").value;
  loaderContainer.classList.add("loader");
  searchbar.classList.add("hiddenjs");
  setTimeout(function () {
    loaderContainer.classList.remove("loader");
    exitResultButton.classList.remove("hiddenjs");
    searchPage.innerHTML = `Your search for "${searchPhrase}" returned these results:`;

    return false;
  }, 1000);
};

exitResultButton.onclick = function exitSearch() {
  let searchPhrase = document.querySelector("#input-search").value;
  hiddenForSearch.classList.remove("hiddenjs");
  resultContainer.classList.add("hiddenjs");
  return false;
};

menuButton.onclick = function showMenu() {
  menuOverlay.classList.remove("hiddenjs");
  setTimeout(function () {
    main.classList.add("hiddenjs");
  }, 500);
};

exitMenuButton.onclick = function exitMenu() {
  menuOverlay.classList.add("hiddenjs");
  main.classList.remove("hiddenjs");
  return false;
};
