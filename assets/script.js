let time = 7000;
let currentImageIndex = 0;
let images = document.querySelectorAll(".imagens-slider img");
let max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selecionada");

  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;

  images[currentImageIndex].classList.add("selecionada");
}

function start() {
  setInterval(() => {
    nextImage();
  }, time);
}

window.addEventListener("load", start);
