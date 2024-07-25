function getBlogs() {
  console.log("Get Blogs");
  fetch("http://localhost:3001/api/blogs")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      insertBlogs(data);
    });
}

const blogsElement = document.getElementById("blogs");

function insertBlogs(blogs) {
  blogs = JSON.parse(blogs).blogs;

  for (let i = 0; i < blogs.length; i++) {
    blogsElement.innerHTML += createBlog(blogs[i].title, blogs[i].content);
  }
}

function createBlog(title, content) {
  return `<li>
        <h2> ${title}</h2>
        <p>${content}</p>
      </li>
    `;
}
