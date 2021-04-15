const url2 =
  "https://rainydays.lisa-noroff.no/wp-json/wc/store/products?category=23";
const suggestionsContainer = document.querySelector(".container-suggestions");

async function getSuggestions() {
  try {
    const response = await fetch(url2);
    const getResults = await response.json();
    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}

getSuggestions();

function createHTML(suggestion) {
  suggestion.forEach(function (suggestion) {
    console.log(suggestion);
    suggestionsContainer.innerHTML += `<a href="specs.html?id=${suggestion.id}">
    <div class="container-suggestions-1">
        <img class="mightlike" src="${suggestion.images[0].src}" alt="${suggestion.name}" /></a>
        <p class="product-header uppercase">${suggestion.name}</p>
    </div>
        </a>`;
  });
}
