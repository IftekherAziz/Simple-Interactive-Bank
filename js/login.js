//console.log('login.js');

// Step 1: Get the form element
// Add click event listener with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // Setp 2: Get the username and password input
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");

  // Step 3: Always remember to get the value of the input
  const email = emailField.value;
  const password = passwordField.value;
  //console.log(email,password);

  /* Do not verify email and password on the client side */
  /* Instead, send the email and password to the server */

  // Step 4: Verify email and password
    if (email == "bank@mail.com" && password == "bank2023") {
      //console.log("Login successful");

      // Step 5: Redirect to the home page
      window.location.href = "bank.html";
    }
    else {
        // console.log("Login failed");
        // Step 6: Display error message
        alert("Login failed: Please check your email and password");
        }
});
