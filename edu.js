// document.getElementById("search").addEventListener("input", function() {
//     console.log("Searching for: " + this.value);
// });




document.addEventListener("DOMContentLoaded", function () {
    const slideshows = document.querySelectorAll('.slideshow-container');

    slideshows.forEach((slideshow, index) => {
        let currentSlide = 0;
        const slides = slideshow.querySelector('.slides');
        const totalSlides = slideshow.querySelectorAll('.slide').length;
        const prevBtn = slideshow.querySelector('.prev');
        const nextBtn = slideshow.querySelector('.next');

        function moveSlide(direction) {
            currentSlide += direction;

            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            } else if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }

            const offset = -currentSlide * 100;
            slides.style.transform = `translateX(${offset}%)`;
        }

        prevBtn.addEventListener("click", () => moveSlide(-1));
        nextBtn.addEventListener("click", () => moveSlide(1));
    });
});
