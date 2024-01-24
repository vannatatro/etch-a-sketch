// Make grid of divs
let divContainer = document.querySelector("#container")

const createGrid = (amtOfSquares) => {
    for (let i = 1; i < amtOfSquares+1; i++) {
        const row = document.createElement("div");
        row.classList.add("gridRow")
        divContainer.append(row);
        for (let i = 1; i < amtOfSquares+1; i++) {
            let squares = document.createElement("div");
            squares.classList.add("gridSquares");
            row.append(squares);
            // Make pen work
            squares.addEventListener('mouseenter',() => {
                squares.style.backgroundColor = "black"
            })
        }
    }
}
createGrid(32)
// Make button that refreshes ink

let resetBtn = document.getElementById("refreshBtn")
resetBtn.addEventListener("click", () => {
    console.log("clicked")
    location.reload();
})

// Make button for custom dimensions
// let dimBtn = document.getElementById("sizeBtn")
// dimBtn.addEventListener('click', () => {
//     let userAmount = Number(prompt("Please enter the dimensions (2-100) would you like"))

//     while (userAmount > 100) {
//         userAmount = Number(prompt("Number entered was too big. Please enter the dimensions (2-100) would you like"))
//     } 
//     createGrid(userAmount)
    
// })