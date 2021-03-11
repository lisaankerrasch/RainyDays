const shopNav = document.querySelector(".shopNav");
const shopOverlay = document.querySelector(".overlay-shop");
const aboutNav = document.querySelector(".aboutNav");
const aboutOverlay = document.querySelector(".overlay-about");
const searchIcon = document.querySelector(".search-icon");
const searchbar = document.querySelector(".searchbar");

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
};
