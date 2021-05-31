const url =
  "https://rainydays.lisa-noroff.no/wp-json/wc/store/products?per_page=20";
const productContainer = document.querySelector(".container-shop");
const filterButton = document.querySelector(".filter-button-main");
const filterOverlay = document.querySelector(".filter-overlay");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    console.log(product);
    productContainer.innerHTML += `<div class="product-all-container">
      <a href="specs.html?id=${product.id}">
      <img src="${product.images[0].src}" alt="${product.name}"/>
      <p class="product-all-header uppercase">${product.name}</p>
      <p class="product-all-price">
      ${product.prices.currency_prefix}
      ${product.prices.price}
    </p>
      </a>
      <button class="product-button-all add-to-cart" data-product="${product.id}">Add to cart </button>
      </div>
     `;
  });
  document
    .querySelector(".sort-click-low")
    .addEventListener("click", function () {
      products.sort((a, b) => (a.prices.price > b.prices.price ? 1 : -1));
      productContainer.innerHTML = "";
      createHTML(products);
    });
  document
    .querySelector(".sort-click-high")
    .addEventListener("click", function () {
      products.sort((a, b) => (a.prices.price < b.prices.price ? 1 : -1));
      productContainer.innerHTML = "";
      createHTML(products);
    });
}

filterButton.onclick = function viewFilter() {
  filterOverlay.classList.toggle("hiddenjs");
};
