const board = document.querySelector("#board");
const resetButton = document.querySelector("#btnReset");
const square = document.createElement("div");

createSketch(16);

resetButton.addEventListener("click", () => {
    let size = prompt("Type the size of your sketch", "1-100");
    if (size > 100 || size < 1) {
        alert("Choose a number that is 1 or less than or equal to 100");
    } else {
        while (board.firstChild) {
            board.removeChild(board.lastChild);
        }
        createSketch(size);
    }
});

function createSketch(size) {

    for (i = 0; i < size * size ; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${400 / size}px`;
        square.style.height = `${400 / size}px`;
        square.style.opacity = "1";
        board.appendChild(square);
    }
}

board.addEventListener("mouseover", (event) => {
    let squareColor = getComputedStyle(event.target).backgroundColor;
    let squareOpacity = getComputedStyle(event.target).opacity;
    if ( squareColor === "rgb(255, 255, 255)" && squareOpacity === "1") {
        event.target.classList.replace("square", "paintedSquare");
        event.target.style.opacity = ".1";
    } else if (squareOpacity < 1) {
        event.target.style.opacity = (+squareOpacity + .1);
    }
});














