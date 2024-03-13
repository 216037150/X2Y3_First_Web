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