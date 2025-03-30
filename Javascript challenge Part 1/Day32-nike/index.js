let message = document.getElementById("error");
console.log(message);

function displayError() {
  console.log("button clicked");
  message.textContent = "An error occurred, please try again later";
}
