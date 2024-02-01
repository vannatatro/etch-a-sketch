// Make grid of divs
let divContainer = document.querySelector("#container")

function createGrid(userAmount) { {
    for (let i = 1; i < userAmount+1; i++) {
        let row = document.createElement("div");
        row.classList.add("gridRow")
        divContainer.append(row);
        for (let i = 1; i < userAmount+1; i++) {
            let squares = document.createElement("div");
            squares.classList.add("gridSquares");
            row.append(squares);
            // Make pen work
            squares.addEventListener('mouseenter',() => {
                squares.style.backgroundColor = "black"
            })
            // Make button that refreshes ink
                let resetBtn = document.getElementById("refreshBtn")
                resetBtn.addEventListener("click", () => {
                squares.style.backgroundColor = "white";
            })

            // Custom size button
            let dimBtn = document.getElementById("sizeBtn");
            dimBtn.addEventListener('click', () => { 
                row.removeChild(squares);
                divContainer.removeChild(row);

            })
        }}
        

    }
}

createGrid(36)

// Make button for custom dimensions
let dimBtn = document.getElementById("sizeBtn")
dimBtn.addEventListener('click', () => {
    userAmount = Number(prompt("Please enter the dimensions (2-100) would you like"))

    if (userAmount > 100) {
        alert("Number entered was too big. Please try again.")
        userAmount = 36;
    } 
    if (userAmount < 2) {
        alert("Number entered was too small. Please try again.")
        userAmount = 36;
    }

    if (2 <= userAmount <=100) {
        createGrid(userAmount)
    }
    // row.removeChild(squares)
    // divContainer.removeChild(row)
    // createGrid(userAmount)
    
})