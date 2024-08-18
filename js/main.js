const themeToggleBtn = document.querySelector("#theme-toggle");
const body = document.querySelector("body");
const themeIcons = document.querySelectorAll("#theme-toggle span");
const navMenu = document.querySelector("#nav-menu");
const menuIcon = document.querySelector("#menu-icon");
const menuClose = document.querySelector("#menu-close");

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeIcons.forEach((themeIcon) => {
    themeIcon.classList.toggle("active");
  });
});

menuIcon.addEventListener("click", () => {
  navMenu.classList.add("active");
  const bodyChildren = document.body.children;
  Array.from(bodyChildren).forEach((element) => {
    if (
      element.tagName !== "HEADER" &&
      element.tagName !== "SCRIPT" &&
      element.tagName !== "STYLE"
    ) {
      element.style.display = "none";
    }
  });
});

menuClose.addEventListener("click", () => {
  navMenu.classList.remove("active");
  const bodyChildren = document.body.children;
  Array.from(bodyChildren).forEach((element) => {
    if (
      element.tagName !== "HEADER" &&
      element.tagName !== "SCRIPT" &&
      element.tagName !== "STYLE"
    ) {
      element.style.display = "block";
    }
  });
});
