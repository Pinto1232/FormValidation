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




// Table code
function searchFunction() {
    // Get the input field
    var input = document.getElementById("search");
    // Get the table
    var table = document.getElementById("dataTable");
    // Get the rows of the table
    var rows = table.getElementsByTagName("tr");
    // Loop through all rows
    for (var i = 0; i < rows.length; i++) {
        // Get the cells of the current row
        var cells = rows[i].getElementsByTagName("td");
        // Loop through all cells
        for (var j = 0; j < cells.length; j++) {
            // If the cell's text matches the input
            if (cells[j].innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
                // Show the row
                rows[i].style.display = "";
                break;
            } else {
                // Hide the row
                rows[i].style.display = "none";
            }
        }
    }
}




/* Modal */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

/* window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}



/* Login form */
// Get the forms
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Get the buttons
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

// Handle the click event for the login button
loginBtn.addEventListener("click", () => {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
});

// Handle the click event for the register button
registerBtn.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});


// Handle the submit event for the login form
loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    // Validate the inputs
    if (!email || !password) {
        alert("Please fill in the email and password fields.");
        return;
    }

    // Send a request to the server to authenticate the user
    fetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                // Save the user's token in local storage
                localStorage.setItem("token", data.token);
                // Redirect the user to the dashboard
                window.location.href = "/dashboard";
            } else {
                alert("Invalid email or password. Please try again.");
            }
        })
        .catch(err => {
            console.error(err);
        });
});

// Handle the submit event for the register form
registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    const passwordConfirm = registerForm["password-confirm"].value;

    // Validate the inputs
    if (!email || !password || !passwordConfirm) {
        alert("Please fill in all the fields.");
        return;
    }
    if (password !== passwordConfirm) {
        alert("Password and Confirm Password do not match.")
        return;
    }
    // Send a request to the server to register the user
    fetch("/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                // Save the user's token in local storage
                localStorage.setItem("token", data.token);
                // Redirect the user to the dashboard
                window.location.href = "/dashboard";
            } else {
                alert("Unable to register the user. Please try again.");
            }
        })
        .catch(err => {
            console.error(err);
        });
});



/* Multi step */
var currentStep = 1;

function nextStep(step) {
    document.getElementById("step" + currentStep).style.display = "none";
    currentStep = step;
    document.getElementById("step" + currentStep).style.display = "block";
}

function prevStep(step) {
    document.getElementById("step" + currentStep).style.display = "none";
    currentStep = step;
    document.getElementById("step" + currentStep).style.display = "block";
}

document.getElementById("step1").style.display = "block";


/* Second multistep */
function showStep2() {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
}

function showStep3() {
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "block";
}


/* Third multistep form */


/* Card Image */
var cardImage = document.getElementById("card-image");
var overlay = document.getElementById("overlay");
var overlayImage = document.getElementById("overlay-image");

cardImage.onclick = function () {
    overlay.style.display = "block";
    overlayImage.src = this.src;
}
overlay.onclick = function () {
    overlay.style.display = "none";
}


/* Card two */
var currentSlide = 0;
var totalSlides = document.getElementsByClassName("card").length;
var cardContainer = document.getElementById("card-container");

setInterval(function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    cardContainer.style.marginLeft = "-" + (currentSlide * 300) + "px";
}, 3000);




var cardContainer = document.getElementById("card-container");

cardContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        var overlay = document.createElement("div");
        overlay.classList.add("overlay");
        var overlayImage = document.createElement("img");
        overlayImage.src = e.target.src;
        overlay.appendChild(overlayImage);
        overlay.style.display = "block";
        document.body.appendChild(overlay);
    }

    /* Allow the image overlay to disapear when clicked outside */
    window.onclick = function (event) {
        if (event.target == overlay) {
            overlay.style.display = "none";
        }
    }
});





/* Star rating */
const rating = document.getElementById('rating');
const stars = rating.getElementsByTagName('i');

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('mouseover', function () {
        for (let j = 0; j < stars.length; j++) {
            stars[j].classList.remove('selected');
        }
        for (let j = 0; j <= i; j++) {
            stars[j].classList.add('selected');
        }
    });

    stars[i].addEventListener('mouseout', function () {
        for (let j = 0; j < stars.length; j++) {
            stars[j].classList.remove('selected');
        }
    });

    stars[i].addEventListener('click', function () {
        for (let j = 0; j <= i; j++) {
            stars[j].classList.add('selected');
        }
    });
}
