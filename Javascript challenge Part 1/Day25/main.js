let count = 0;
const countEl = document.getElementById("count-el");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    count++;
    countEl.textContent = count;
});
