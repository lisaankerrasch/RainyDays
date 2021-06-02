const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

let total = 0;

cartItems.forEach(function (cartElement) {
  total += cartElement.price;
  cartContainer.innerHTML += `<div class="cart-item">
    <p>${cartElement.name}</p>
    <div style="background-image: url(${cartElement.image})" class="cart-image" alt="${cartElement.name}"></div>
    </div>`;
});
totalContainer.innerHTML = `Total: ${total}`;
