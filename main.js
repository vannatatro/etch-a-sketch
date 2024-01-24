// Make grid of divs
let divContainer = document.querySelector("#container")
let amount = 16

function createGrid(amount) {
} if (amount > 100) {
    console.log("number too big");

} else if (amount < 2) {
    console.log("number too small");

} else if (amount <= 100) {
    for (let i = 1; i < amount+1; i++) {
        const row = document.createElement("div");
        row.classList.add("gridRow")
        divContainer.append(row);
        for (let i = 1; i < amount+1; i++) {
            let squares = document.createElement("div");
            squares.classList.add("gridSquares");
            row.append(squares);
            // Make pen work
            squares.addEventListener('mouseenter',() => {
                squares.style.backgroundColor = "black"
            })
    }
}}

// Make button that prompts user for grid dimensions

