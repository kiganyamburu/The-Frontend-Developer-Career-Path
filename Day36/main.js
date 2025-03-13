let card1 = 12;
let card2 = 11;
let sum = card1 + card2;

if (sum < 21) {
    console.log("Do you want to pick a different card?😊");
} else if (sum === 21) {
    console.log("congratulation you have won the game!🎉");
} else if  (sum > 21) {
    console.log("You have lost the game!😒");
}
