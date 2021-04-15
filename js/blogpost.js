const blogContainer = document.querySelector(".blog-container");
const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://rainydays.lisa-noroff.no/wp-json/wp/v2/posts/" + id + "?_embed";

async function createHTML() {
  try {
    const response = await fetch(url);
    const blog = await response.json();

    console.log(blog);

    blogContainer.innerHTML += `<div class="blogpost">

    <h3>${blog.title.rendered}</h3>
   <p> ${blog.excerpt.rendered}<br><br> </p>
   <img class="blogpost-img" src="${blog._embedded["wp:featuredmedia"]["0"].source_url}"
   alt="Man standing on a hill looking to the horizon">
</div>`;

    title.innerHTML = `RainyDays: ${blog.title.rendered}`;
  } catch (error) {
    console.log(error);
  }
}

createHTML();
