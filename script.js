function submitForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var password = document.getElementById('password').value;
   
    if (fullName === '' || email === '' || !gender || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert('You have successfully booked a session');
}

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert('Message successfully sent');
}