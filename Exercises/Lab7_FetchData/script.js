document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("posts");
  const limit = 10;

  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    .then((response) => response.json())
    .then((posts) => {
      posts.forEach((post) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardContent = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;

        card.innerHTML = cardContent;
        postsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
