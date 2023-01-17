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
