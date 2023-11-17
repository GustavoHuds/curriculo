document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.section h2');

    headings.forEach(heading => {
        heading.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('show');
        });
    });

    images.forEach(image => {
        image.addEventListener('click', function() {
            window.open(this.src, '_blank');
        });
    });
});

let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0


    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)