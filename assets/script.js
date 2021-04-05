let time = 4000
    currentImageIndex = 0,
    images= document
                .querySelectorAll(".imagens-slider img")
    max = images.length;

    function nextImage() {

        images[currentImageIndex]
            .classList.remove("selecionada")

        currentImageIndex++

        if(currentImageIndex >= max)
            currentImageIndex = 0

        images[currentImageIndex]
            .classList.add("selecionada")
    }

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)