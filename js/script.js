const cartButton = document.querySelector(".add-cart");
const successMessage = document.querySelector(".success-message");
const loaderContainerCart = document.querySelector(".loader-container-cart");
const cartCount = document.querySelector(".cart-count");
const jacketName = document.querySelector("h4").innerHTML;
const sizePicker1 = document.querySelector(".size-picker-1");
const sizePicker2 = document.querySelector(".size-picker-2");
const sizePicker3 = document.querySelector(".size-picker-3");
const sizePicker4 = document.querySelector(".size-picker-4");
const sizePicker5 = document.querySelector(".size-picker-5");

sizePicker1.onclick = function changeColour() {
  sizePicker1.style.backgroundColor = "#ce301b";
};
sizePicker2.onclick = function changeColour() {
  sizePicker2.style.backgroundColor = "#ce301b";
};
sizePicker3.onclick = function changeColour() {
  sizePicker3.style.backgroundColor = "#ce301b";
};
sizePicker4.onclick = function changeColour() {
  sizePicker4.style.backgroundColor = "#ce301b";
};
sizePicker5.onclick = function changeColour() {
  sizePicker5.style.backgroundColor = "#ce301b";
};

cartButton.onclick = function addToCart() {
  cartButton.classList.add("hiddenjs");
  loaderContainerCart.classList.add("loader");
  setTimeout(function () {
    sizePicker1.style.backgroundColor = "#9fa87b";
    sizePicker2.style.backgroundColor = "#9fa87b";
    sizePicker3.style.backgroundColor = "#9fa87b";
    sizePicker4.style.backgroundColor = "#9fa87b";
    sizePicker5.style.backgroundColor = "#9fa87b";
    loaderContainerCart.classList.remove("loader");
    successMessage.innerHTML = `<div class="success-cart">${jacketName} was added to your cart!</div>`;
    cartCount.classList.add("cart-count-1");
    cartCount.innerHTML = `1`;
    console.log("Success!");
  }, 300);
  return false;
};
