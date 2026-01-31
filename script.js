// script.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const root = document.documentElement;

  // Safety check (prevents JS error)
  if (!toggleBtn) {
    console.warn("Theme toggle button not found");
    return;
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    root.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }

  function toggleTheme() {
    root.classList.toggle("dark");
    const isDark = root.classList.contains("dark");

    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  // Mouse click
  toggleBtn.addEventListener("click", toggleTheme);

  // Keyboard accessibility
  toggleBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleTheme();
    }
  });
});
