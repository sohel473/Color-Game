var numOfSq = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square"); 
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.getElementById("message");
var h1Display = document.querySelector("h1"); 
var resetBtn = document.querySelector("#resetBtn"); 
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (let i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function () {
            modeBtns[0].classList.remove("selected")
            modeBtns[1].classList.remove("selected")
            modeBtns[2].classList.remove("selected")
            this.classList.add("selected");
            numOfSq = this.textContent === "Easy" ? 3 : this.textContent === "Medium"? 6 : 9;
            reset();
        })

    }
}

function setupSquares() {
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function () {
            if (this.style.backgroundColor === pickedColor) {
                changeColor(pickedColor);
                messageDisplay.textContent = "Correct!"
                h1Display.style.backgroundColor = pickedColor;
                resetBtn.textContent = "Play Again?";
            }
            else {
                this.style.backgroundColor = document.body.style.backgroundColor;
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset() {
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    colors = generateColors(numOfSq);
    pickedColor = PickColor();
    colorDisplay.textContent = pickedColor;
    h1Display.style.backgroundColor = "steelblue";
    for (let i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.display = "block";
            square[i].style.backgroundColor = colors[i];
        }
        else {
            square[i].style.display = "none";
        }
    }
}

resetBtn.addEventListener("click", reset);


function changeColor(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}

function PickColor() {
    return colors[Math.floor((Math.random() * colors.length))];
}

function generateColors(num) {
    var arr = []

    for (let i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}

function randomColors() {
    var red = Math.floor((Math.random() * 256));
    var green = Math.floor((Math.random() * 256));
    var blue = Math.floor((Math.random() * 256));

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
