const url =
  "https://rainydays.lisa-noroff.no/wp-json/wc/store/products?category=20";
const productContainer = document.querySelector(".product");
const filterPriceLow = document.querySelector(".filter-price-low");

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
    productContainer.innerHTML += `<a href="specs.html?id=${product.id}">
      <div class="product-container">
      <img src="${product.images[0].src}" alt="${product.name}"/>
      <p class="product-header uppercase">${product.name}</p>
      <p class="product-price">
      ${product.prices.currency_prefix}
      ${product.prices.price}
    </p>
 </div>
      </a>`;
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
