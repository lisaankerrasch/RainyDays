const shopNav = document.querySelector(".shopNav");
const shopOverlay = document.querySelector(".overlay-shop");

shopNav.onmouseover = function () {
  setTimeout(function () {
    shopOverlay.classList.remove("hiddenjs");
  }, 300);
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
