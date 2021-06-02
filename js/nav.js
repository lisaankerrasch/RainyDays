const shopNav = document.querySelector(".shopNav");
const shopOverlay = document.querySelector(".overlay-shop");
const aboutNav = document.querySelector(".aboutNav");
const aboutOverlay = document.querySelector(".overlay-about");
const searchIcon = document.querySelector(".search-icon");
const searchbar = document.querySelector(".searchbar");
const closeButton = document.querySelector(".close-button");
const searchButton = document.querySelector(".search-button");
const hiddenForSearch = document.querySelector(".hideforsearch");
const searchPhrase = document.querySelector("#input-search").value;
const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menuoverlay");
const main = document.querySelector("main");
const exitMenuButton = document.querySelector(".menu-close-button");
const searchForm = document.querySelector(".search-form");
const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");

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
  searchbar.classList.toggle("hiddenjs");
  return false;
};

closeButton.onclick = function () {
  searchbar.classList.add("hiddenjs");
  return false;
};

const searchUrl =
  "https://rainydays.lisa-noroff.no/wp-json/wc/store/products?per_page=20";

searchButton.onclick = async function Search() {
  try {
    response = await fetch(searchUrl);
    const resultList = await response.json();

    const resultContainer = document.querySelector("#search-result");
    const searchPage = document.querySelector(".result-p");
    const results = document.querySelector(".result-list");
    results.innerHTML = "";

    hiddenForSearch.classList.add("hiddenjs");
    resultContainer.classList.remove("hiddenjs");
    const searchPhrase = document
      .querySelector("#input-search")
      .value.toLowerCase();
    searchbar.classList.add("hiddenjs");
    searchPage.innerHTML = "";
    searchPage.innerHTML = `Your search for "${searchPhrase}" did not return any results. Try a new search, or visit the <a class="red-font" href="shop.html">shop</a>
    <div class="extra-space"></div>`;

    for (let i = 0; i < resultList.length; i++) {
      if (
        resultList[i].name.toLowerCase().includes(searchPhrase) ||
        resultList[i].categories[0].name.toLowerCase() === searchPhrase
      ) {
        hiddenForSearch.classList.add("hiddenjs");
        resultContainer.classList.remove("hiddenjs");
        searchbar.classList.add("hiddenjs");
        console.log(resultList[i].categories[0].name);
        searchPage.innerHTML = `Your search for "${searchPhrase}" returned these results:`;
        results.innerHTML += `
                            <div class="product-all-container">
                            <a href="specs.html?id=${resultList[i].id}">
                            <img src="${resultList[i].images[0].src}" alt="${resultList[i].name}"/>
                            <p class="product-all-header uppercase">${resultList[i].name}</p>
                            <p class="product-all-price">
                            ${resultList[i].prices.currency_prefix}
                            ${resultList[i].prices.price}
                            </p>
                            </a>
                            <button class="product-button-all add-to-cart" data-product="${resultList[i].id}">Add to cart </button>
                            </div>`;
        console.log(resultList[i]);
      }
      searchForm.reset();
    }
  } catch (error) {
    console.log(error);
  }
};

menuButton.onclick = function showMenu() {
  menuOverlay.classList.remove("hiddenjs");
  setTimeout(function () {
    main.classList.add("hiddenjs");
  }, 500);
};

exitMenuButton.onclick = function exitMenu() {
  menuOverlay.classList.add("hiddenjs");
  main.classList.remove("hiddenjs");
  return false;
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchButton.click();
});

cartIcon.onclick = function () {
  if (cart.style.display === "flex") {
    cart.style.display = "none";
  } else {
    cart.style.display = "flex";
  }
};
