// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
  count += 1;

  console.log(count);
}
function save() {
  console.log(count);
}
save();
