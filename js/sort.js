// const jacketList =
//   "https://rainydays.lisa-noroff.no/wp-json/wc/store/products?category=19";
// const filterPriceLow = document.querySelector(".filter-price");

// function addJackets(jackets) {
//   productContainer.innerHTML = "";
//   jackets.forEach(function (jacket) {
//     productContainer.innerHTML += `<a href="specs.html?id=${jacket.id}">
//       <div class="product-container">
//       <img src="${jacket.images[0].src}" alt="${jacket.name}"/>
//       <p class="product-header uppercase">${jacket.name}</p>
//       <p class="product-price">
//       ${jacket.prices.currency_prefix}
//       ${jacket.prices.price}
//     </p>
//  </div>
//       </a>`;
//   });

//   addJackets(jacketList);

//   console.log(jacket.name);

//   function checkJacketPrice(jacket) {
//     return jacket.prices.price <= 50;
//   }

//   filterPriceLow.onclick = function filterJackets() {
//     const filteredJackets = jacketList.filter(checkJacketPrice);
//     addJackets(filteredJackets);
//   };
// }

//   const url2 =
//     "https://rainydays.lisa-noroff.no/wp-json/wc/store/products?category=19";

//   async function getJackets() {
//     try {
//       const response = await fetch(url2);
//       const list = await response.json();
//       const jacketList = list;
//       createHTML(jacketList);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   getJackets();

//   function addJackets(jackets) {
//     productContainer.innerHTML = "";
//     jackets.forEach(function (jacket) {
//       productContainer.innerHTML = `<a href="specs.html?id=${jacket.id}">
//         <div class="product-container">
//         <img src="${jacket.images[0].src}" alt="${jacket.name}"/>
//         <p class="product-header uppercase">${jacket.name}</p>
//         <p class="product-price">
//         ${jacket.prices.currency_prefix}
//         ${jacket.prices.price}
//       </p>
//    </div>
//         </a>`;
//     });
//   }

//   addJackets(jacketList);

//   console.log(jacket.name);
//   console.log(jacketList);

//   function checkJacketPrice(jacket) {
//     return jacket.prices.price <= 50;
//   }

//   filterPriceLow.onclick = function filterJackets() {
//     const filteredJackets = jacketList.filter(checkJacketPrice);
//     addJackets(filteredJackets);
//   };
// }
