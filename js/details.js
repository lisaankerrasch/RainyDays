const detailContainer = document.querySelector(".product-container");
const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://rainydays.lisa-noroff.no/wp-json/wc/store/products/" + id;

async function createHTML(details) {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    detailContainer.classList.remove("hidden");

    detailContainer.innerHTML += `<section>
    <h4 class="uppercase">${details.name}</h4>
  </section>
  <section class="spec-container">
    <div class="item-photo">
      <img src="${details.images[0].src}" alt="${details.name}"/>
    </div>
    <div class="item-info">
      <p class="bold">${details.prices.currency_symbol}${details.prices.price}</p>
      <hr />
      <p class="uppercase">
        Colors: <span class="dot red"></span><span class="dot green"></span>
      </p>
      <hr />
      <p class="uppercase">Size:</p>
      <div class="sizes">
        <div class="size-picker-1">S</div>
        <div class="size-picker-2">M</div>
        <div class="size-picker-3">L</div>
        <div class="size-picker-4">XL</div>
        <div class="size-picker-5">XXL</div>
      </div>
      <hr />
      <div class="quantity-dropdown">
        <button class="dropdown-button">Quantity</button>
        <div id="dropdown" class="dropdown-content">
          <a class="quantity-1">1</a>
          <a class="quantity-2">2</a>
          <a class="quantity-3">3</a>
          <a class="quantity-4">4</a>
          <a class="quantity-5">5</a>
        </div>
      </div>
    </div>
    <div class="item-text">
      <p class="p-grey smaller">${details.short_description}
      </p>
    </div>
  </section>`;
    const cartButton = document.querySelector(".add-cart");
    const loaderContainerCart = document.querySelector(
      ".loader-container-cart"
    );
    const successMessage = document.querySelector(".success-message");
    const cartCount = document.querySelector(".cart-count");

    cartButton.onclick = function addToCart() {
      cartButton.classList.add("hiddenjs");
      loaderContainerCart.classList.add("loader");
      setTimeout(function () {
        // sizePicker1.style.backgroundColor = "#9fa87b";
        // sizePicker2.style.backgroundColor = "#9fa87b";
        // sizePicker3.style.backgroundColor = "#9fa87b";
        // sizePicker4.style.backgroundColor = "#9fa87b";
        // sizePicker5.style.backgroundColor = "#9fa87b";
        loaderContainerCart.classList.remove("loader");
        successMessage.innerHTML = `<div class="success-cart">${details.name} was added to your cart! <a href="cart.html">Go to cart</a></div>`;
        cartCount.classList.add("cart-count-1");
        cartCount.innerHTML = `1`;
        console.log("Success!");
      }, 300);
      return false;
    };

    title.innerHTML = `${details.name}`;
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

createHTML();
