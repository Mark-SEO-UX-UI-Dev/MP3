const slideContainer = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSliderPosition();
}

function updateSliderPosition() {
  const slideWidth = slides[0].clientWidth;
  slideContainer.style.transform = `translateX(-${
    currentSlide * slideWidth
  }px)`;
}

let slideInterval = setInterval(nextSlide, 3000);

slideContainer.addEventListener("mouseover", () => {
  clearInterval(slideInterval);
});

slideContainer.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 3000);
});
