let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
Day33-calc/index.js
// Create four functions: add(), subtract(), divide(), multiply()
function add() {
  let sum = num1 + num2;
  document.getElementById("sum-el").textContent = "Sum: " + sum;
}
// add();
function subtract() {
  let sum = num1 - num2;
  document.getElementById("sum-el").textContent = "Sum: " + sum;
}

function divide() {
  let sum = num1 / num2;
  document.getElementById("sum-el").textContent = "Sum: " + sum;
}

function multiply() {
  let sum = num1 * num2;
  document.getElementById("sum-el").textContent = "Sum: " + sum;
}

// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
