const menuBurger = document.querySelector(".burger");
const nav = document.querySelector("nav ul");

// Burger
menuBurger.addEventListener("click", () => {
  nav.classList.toggle("slide");
});
