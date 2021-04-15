const url = "https://rainydays.lisa-noroff.no/wp-json/wp/v2/posts?_embed";
const blogContainer = document.querySelector(".blog-container");

async function getBlogposts() {
  try {
    const response = await fetch(url);
    const blogList = await response.json();

    const blog = blogList;

    console.log(blogList);

    for (let i = 0; i < blogList.length; i++) {
      blogContainer.innerHTML += `<a href="blogpost.html?id=${blog[i].id}">
    <div class="blogpost">

      <h3>${blog[i].title.rendered}</h3>
   
    <img class="blogpost-img" src="${blog[i]._embedded["wp:featuredmedia"]["0"].source_url}"
      alt="${blog[i].title.rendered}">
    <p> ${blog[i].excerpt.rendered}<br><br> </p>
  </div>
      </a>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getBlogposts();
