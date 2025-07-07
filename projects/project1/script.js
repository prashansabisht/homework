// Add a small hover effect or message on page load
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.boxShadow = "0 0 10px #fff";
    });
    link.addEventListener('mouseleave', () => {
      link.style.boxShadow = "none";
    });
  });

  console.log("Portfolio Loaded Successfully 🚀");
});