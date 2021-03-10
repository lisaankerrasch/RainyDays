const cartButton = document.querySelector(".add-cart");
const successMessage = document.querySelector(".success-message");
const loaderContainer = document.querySelector(".loader-container");
const cartCount = document.querySelector(".cart-count");
const jacketName = document.querySelector("h4.value");

cartButton.onclick = function addToCart() {
  cartButton.classList.add("hiddenjs");
  loaderContainer.classList.add("loader");
  setTimeout(function () {
    loaderContainer.classList.remove("loader");
    successMessage.innerHTML = `<div class="success">The item was added to your cart!</div>`;
    cartCount.classList.add("cart-count-1");
    cartCount.innerHTML = `1`;
    console.log("Success!");
  }, 300);
  return false;
};
