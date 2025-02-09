document.addEventListener("DOMContentLoaded", function () {
    const sliderImages = document.querySelectorAll('.slider-img');
    const sliderContainer = document.querySelector('.slider-images');
    
    sliderImages.forEach((image, index) => {
      image.addEventListener('click', function () {
        // Remove active class from all images
        sliderImages.forEach(img => img.classList.remove('active'));
        
        // Add active class to the clicked image
        image.classList.add('active');
        
        // Move the container to show the active image in the center
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
      });
    });
  });
  