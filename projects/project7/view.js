// view.js

document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.getElementById("blog-list");
  const searchInput = document.getElementById("search");

  function loadBlogs(filter = "") {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    blogList.innerHTML = "";

    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
      blogList.innerHTML = "<p>No blogs found.</p>";
      return;
    }

    filtered.reverse().forEach((blog, index) => {
      const post = document.createElement("div");
      post.className = "blog-post animate";

      post.innerHTML = `
        <h2>${blog.title}</h2>
        <small>${new Date(blog.date).toLocaleString()}</small>
        <div>${marked.parse(blog.content)}</div>
        <button class="btn delete-btn" data-index="${blogs.length - 1 - index}">🗑 Delete</button>
      `;

      blogList.appendChild(post);
    });

    // Add delete functionality
    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const idx = e.target.getAttribute("data-index");
        blogs.splice(idx, 1);
        localStorage.setItem("blogs", JSON.stringify(blogs));
        loadBlogs(searchInput.value);
      });
    });
  }

  searchInput.addEventListener("input", () => {
    loadBlogs(searchInput.value);
  });

  loadBlogs();
});