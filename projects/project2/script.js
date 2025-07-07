document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll("section, .feature-card, .pricing-card, blockquote").forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });

  // Dark mode toggle
  const toggle = document.createElement("button");
  toggle.textContent = "🌓";
  toggle.className = "dark-mode-toggle";
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});