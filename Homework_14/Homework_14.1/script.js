const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    dot.addEventListener("click", () => {
      goToSlide(index);
    });

    dotsContainer.appendChild(dot);
  });
}

function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;

  currentIndex = index;
  updateCurrentSlide();
}

function updateCurrentSlide() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentIndex);
  });

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });

  prevBtn.classList.toggle("hidden", currentIndex === 0);
  nextBtn.classList.toggle("hidden", currentIndex === slides.length - 1);
}

nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));
prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));

createDots();
updateCurrentSlide();