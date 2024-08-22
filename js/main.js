window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("#website-content").style.display = "block";
  }, 500);
});

const themeToggleBtn = document.querySelector("#theme-toggle");
const body = document.querySelector("body");
const themeIcons = document.querySelectorAll("#theme-toggle span");
const navMenu = document.querySelector("#nav-menu");
const menuIcon = document.querySelector("#menu-icon");
const menuClose = document.querySelector("#menu-close");
const websiteContent = document.querySelector("#website-content");
const main = document.querySelector("main");

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeIcons.forEach((themeIcon) => {
    themeIcon.classList.toggle("active");
  });
});

menuIcon.addEventListener("click", () => {
  navMenu.classList.add("active");
  Array.from(websiteContent.children).forEach((element) => {
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
  Array.from(websiteContent.children).forEach((element) => {
    if (
      element.tagName !== "HEADER" &&
      element.tagName !== "SCRIPT" &&
      element.tagName !== "STYLE"
    ) {
      element.style.display = "block";
    }
  });
});

window.matchMedia("(min-width: 814px)").addEventListener("change", (e) => {
  if (e.matches) main.style.display = "block";
});
