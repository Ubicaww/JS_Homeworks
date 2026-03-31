const image = document.querySelector(".random-image");

const randomNumber = Math.floor(Math.random() * 9) + 1;

image.src = `./images/${randomNumber}.jpg`;