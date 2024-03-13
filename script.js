function submitForm(formId) {
    var form = document.getElementById(formId);
    var inputs = form.querySelectorAll('input, select, textarea');
    var isValid = true;

    inputs.forEach(function(input) {
        if (!input.value.trim()) {
            isValid = false;
            return;
        }
    });

    if (isValid) {
        alert("Submission successfully");
        form.reset();
    } else {
        alert("Please fill in all fields.");
    }
}

// function for sliding images (Courses on our front page)

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector('.services');
    const slideWidth = slides.firstElementChild.clientWidth;
    let currentSlide = 0;
    let intervalId;
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.children.length;
      slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  
    function startSlider() {
      intervalId = setInterval(nextSlide, 450);
    }
  
    function stopSlider() {
      clearInterval(intervalId);
    }
  
    // Start the slider initially
    startSlider(); 
  
    // Stop slider on mouse enter
    // Restart slider on mouse leave
    slides.addEventListener('mouseenter', stopSlider); 
    slides.addEventListener('mouseleave', startSlider); 
  });
  document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.firstElementChild.clientWidth;
  let currentSlide = 0;
  let intervalId;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.children.length;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  function startSlider() {
    intervalId = setInterval(nextSlide, 450);
  }

  function stopSlider() {
    clearInterval(intervalId);
  }

  // Start the slider initially
  startSlider(); 

  // Stop slider on mouse enter
  // Restart slider on mouse leave
  slides.addEventListener('mouseenter', stopSlider); 
  slides.addEventListener('mouseleave', startSlider); 
});
