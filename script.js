function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var password2 = document.forms["myForm"]["password2"].value;
    var email = document.forms["myForm"]["email"].value;
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    if (password != password2) {
        alert("Passwords must match");
        return false;
    }
}