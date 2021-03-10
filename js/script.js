const cartButton = document.querySelector(".add-cart");
const successMessage = document.querySelector(".success-message");
const loaderContainer = document.querySelector(".loader-container");
const cartCount = document.querySelector(".cart-count");
const jacketName = document.querySelector("h4.value");
const shopNav = document.querySelector(".shopNav");
const shopOverlay = document.querySelector(".overlay-shop");

// cartButton.onclick = function addToCart() {
//   cartButton.classList.add("hiddenjs");
//   loaderContainer.classList.add("loader");
//   setTimeout(function () {
//     loaderContainer.classList.remove("loader");
//     successMessage.innerHTML = `<div class="success">The item was added to your cart!</div>`;
//     cartCount.classList.add("cart-count-1");
//     cartCount.innerHTML = `1`;
//     console.log("Success!");
//   }, 300);
//   return false;
// };

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
