const themeToggleBtn = document.querySelector("#theme-toggle");
const body = document.querySelector("body");
const themeIcons = document.querySelectorAll("#theme-toggle span");
const activeThemeIcon = document.querySelectorAll("#theme-toggle span.active");

// console.log(1 * 2);

console.log(themeIcons);

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  for (let i of themeIcons) {
    console.log(themeIcons);
  }
});
