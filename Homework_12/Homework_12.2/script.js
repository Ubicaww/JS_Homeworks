const container = document.querySelector(".container");

container.addEventListener("click", (event) => {
  const target = event.target;

  if (target.tagName === "BUTTON") {
    const buttonNumber = target.dataset.btn;
    console.log(`Button pressed: ${buttonNumber}`);
  }
});