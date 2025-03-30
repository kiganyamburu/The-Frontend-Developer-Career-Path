let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomIndex1 = Math.floor(Math.random() * fighters.length);
    let randomIndex2 = Math.floor(Math.random() * fighters.length);

    // Ensure the two fighters are different
    while (randomIndex1 === randomIndex2) {
        randomIndex2 = Math.floor(Math.random() * fighters.length);
    }

    let fighter1 = fighters[randomIndex1];
    let fighter2 = fighters[randomIndex2];

    stageEl.textContent = `${fighter1} vs ${fighter2}`;
})
