const setBtn = document.querySelector(".enter-link");
const goBtn = document.querySelector(".go-link");

let savedLink = "";

setBtn.addEventListener("click", () => {
  const link = prompt("Enter the link:");

  if (link) {
    savedLink = link;
  }
});

goBtn.addEventListener("click", () => {
  if (savedLink) {
    window.location.href = savedLink;
  } else {
    alert("Enter the link first!");
  }
});