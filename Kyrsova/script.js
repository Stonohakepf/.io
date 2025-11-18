const burger = document.getElementById("burger");
const nav = document.querySelector(".nav-header");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");

  const icon = burger.querySelector("i");
  if (nav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});