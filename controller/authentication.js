var usernameField = document.getElementById("username");
var passwordField = document.getElementById("password");
var signInForm = document.getElementById("login");
var signInRequest;

function onLoginButtonPressed(event) {
  event.preventDefault();

  var signInData = {
    username: usernameField.value,
    password: passwordField.value 
  };

  signInRequest = new XMLHttpRequest();
  signInRequest.open("POST", "API/V1/Authenticate");
  signInRequest.onreadystatechange = onSignInResponsed;
  signInRequest.send(JSON.stringify(signInData));
}

  function onSignInResponsed(event) {
    if (signInRequest.readyState < 4) {
      return;
    }
    var responseData = JSON.parse(signInRequest.responseText);
    alert(responseData);
  }

signInForm.addEventListener("submit", onLoginButtonPressed);
