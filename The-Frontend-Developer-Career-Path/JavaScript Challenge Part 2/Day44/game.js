let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function random() {
    let randomItem = Math.floor(Math.random() * hands.length)
    return hands[randomItem]
}
console.log(random())