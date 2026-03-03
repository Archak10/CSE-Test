function showMessage() {
    alert("Welcome to my Online Biodata Website!");
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill all required fields!");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}