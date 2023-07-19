function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "admin" && password === "admin") {
        //window.location.href = "second.html";
      // Open second.html in a new window or tab
      window.open("second.html", "_blank");
      return true;
    } else {
      var errorMessage = document.getElementById("error-message");
      errorMessage.innerHTML = "Invalid username or password. Please try again.";
      return false;
    }
  }
  