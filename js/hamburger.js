console.log("hello");

const ul = document.querySelector("nav ul");
console.log(ul);
const burgerButton = document.getElementById("burger-button");
console.log(burgerButton);
const open = document.getElementById("menue-open");
console.log("open");
const close = document.getElementById("menue-close");
console.log("close");

function handleHamburgerButtonClick() {
  console.log("button clicked");
  ul.classList.toggle("visible");
  close.classList.toggle("visible");
  open.classList.toggle("visible");
}
burgerButton.addEventListener("click", handleHamburgerButtonClick);
