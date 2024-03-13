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

function openPopup() {
    document.getElementById('loginPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('loginPopup').style.display = 'none';
}

function loginSubmit() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if (password.trim() === '' || email.trim() === '') {
        alert('Please fill in all the form fields before submitting.');
    } else {
        alert('Email does not not exist');
    }
}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); 
}