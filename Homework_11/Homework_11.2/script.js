const text = document.querySelector(".text");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  text.classList.toggle("active");
});