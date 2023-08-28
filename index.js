

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");

    button.addEventListener("click", function () {
        rollDice();
    });
});

function rollDice() {
    const diceResults = [];
    const numDice = 3;

    for (let i = 0; i < numDice; i++) {
        const result = Math.floor(Math.random() * 6) + 1; 
        diceResults.push(result);
    }

    updateUI(diceResults);
}

function updateUI(results) {
    for (let i = 0; i < results.length; i++) {
        const placeholder = document.getElementById(`placeholder${i + 1}`);
        const img = document.createElement("img");
        img.src = `dice${results[i]}.png`; 
        img.alt = `Dice ${results[i]}`;
        img.classList.add("dice-image");
        placeholder.innerHTML = ""; 
        placeholder.appendChild(img);
    }
}
