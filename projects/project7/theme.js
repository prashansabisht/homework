// theme.js

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");

  // Apply previously saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("theme", currentTheme);
    });
  }
});