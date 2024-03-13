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