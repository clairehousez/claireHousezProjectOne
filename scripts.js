//name space object
const carousel = {}

//images
const getImages = document.querySelectorAll(".carouselImage")

let currentImage = 0
const nextImage = () => {
    changeImage(currentImage + 1)
}
const previousImage = () => {
    changeImage(currentImage - 1)
}

//arrow buttons
const next = document.querySelector(".nextImage")
const previous = document.querySelector(".previousImage")

//Event Listeners
next.addEventListener("click", nextImage, false)
previous.addEventListener("click", previousImage, false)

const changeImage = clicked => {
    getImages[currentImage].className ="carouselImage"
    
    currentImage = (clicked + getImages.length) % getImages.length
    
    getImages[currentImage].className = "carousel photos"
}