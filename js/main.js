const themeToggleBtn = document.querySelector("#theme-toggle");
const body = document.querySelector("body");
const themeIcons = document.querySelectorAll("#theme-toggle span");

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeIcons.forEach((themeIcon) => {
    themeIcon.classList.toggle("active");
  });
});
