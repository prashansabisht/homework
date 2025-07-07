// blog.js
document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.getElementById("blog-list");

  // Get saved blogs from localStorage
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Agar koi blog nahi hai
  if (blogs.length === 0) {
    blogList.innerHTML = "<p style='text-align:center;'>No blog posts yet. Write some!</p>";
    return;
  }

  // Show all saved blogs
  blogs.forEach((blog, index) => {
    const blogDiv = document.createElement("div");
    blogDiv.className = "blog-post fade-in";

    blogDiv.innerHTML = `
      <h2>${blog.title}</h2>
      <p>${blog.content.substring(0, 100)}...</p>
      <button onclick="viewBlog(${index})">Read More</button>
      <button onclick="deleteBlog(${index})" style="color: red;">Delete</button>
    `;

    blogList.appendChild(blogDiv);
  });
});

// View blog
function viewBlog(index) {
  localStorage.setItem("selectedBlog", index);
  window.location.href = "view.html";
}

// Delete blog
function deleteBlog(index) {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.splice(index, 1);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  location.reload(); // Reload to show updated list
}