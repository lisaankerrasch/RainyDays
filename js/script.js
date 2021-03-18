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
const quantityDropdown = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector("#dropdown");
const quantityLink1 = document.querySelector(".quantity-1");
const quantityLink2 = document.querySelector(".quantity-2");
const quantityLink3 = document.querySelector(".quantity-3");
const quantityLink4 = document.querySelector(".quantity-4");
const quantityLink5 = document.querySelector(".quantity-5");

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

quantityDropdown.onclick = function dropdown() {
  dropdownContent.classList.toggle("show");
};

window.onclick = function (event) {
  if (!event.target.matches(".dropdown-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

quantityLink1.onclick = function addQuantity() {
  const quantity1 = document.querySelector(".quantity-1").innerHTML;
  quantityDropdown.innerHTML = `<div>Quantity: ${quantity1}</div>`;
};
quantityLink2.onclick = function addQuantity() {
  const quantity2 = document.querySelector(".quantity-2").innerHTML;
  quantityDropdown.innerHTML = `<div>Quantity: ${quantity2}</div>`;
};
quantityLink3.onclick = function addQuantity() {
  const quantity3 = document.querySelector(".quantity-3").innerHTML;
  quantityDropdown.innerHTML = `<div>Quantity: ${quantity3}</div>`;
};
quantityLink4.onclick = function addQuantity() {
  const quantity4 = document.querySelector(".quantity-4").innerHTML;
  quantityDropdown.innerHTML = `<div>Quantity: ${quantity4}</div>`;
};
quantityLink5.onclick = function addQuantity() {
  const quantity5 = document.querySelector(".quantity-5").innerHTML;
  quantityDropdown.innerHTML = `<div>Quantity: ${quantity5}</div>`;
};
