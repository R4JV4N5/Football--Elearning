// JavaScript for automatic carousel
document.addEventListener("DOMContentLoaded", function (event) {
    var carouselWrapper = document.querySelector('.carousel-wrapper');
    var slideWidth = document.querySelector('.carousel-slide').offsetWidth;
    var currentSlide = 0;
    var totalSlides = carouselWrapper.children.length;
    var interval = 2000; // Change image every 2 seconds

    function moveToNextSlide() {
      if (currentSlide === totalSlides - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      carouselWrapper.style.transform = 'translateX(-' + currentSlide * slideWidth + 'px)';
    }

    setInterval(moveToNextSlide, interval);
  });



//   