const url =
  "https://rainydays.lisa-noroff.no/wp-json/wc/store/products?category=22";
const newsContainer = document.querySelector(".news-container");

async function getNews() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}

getNews();

function createHTML(products) {
  products.forEach(function (product) {
    console.log(product);
    newsContainer.innerHTML += `<a href="specs.html?id=${product.id}">
                <div class="new-arrivals-photos">
                    <div class="news-flex">
                        <img class="front-photo" src="${product.images[0].src}" alt="${product.name}" />
                        <div class="arrivals">
                            <p class="arrivaltext">${product.name}</p>
                        </div>
                    </div>
                </div>
        </a>`;
  });
}
