var numOfSq = 6;  //number of squareBox initially
var colors = generateColors(numOfSq); //list of random colors
var pickedColor = PickColor(); // picking random color from list
var square = document.querySelectorAll(".square"); //selecting square boxes
var colorDisplay = document.getElementById("colorDisplay"); //selecting rgb display
var messageDisplay = document.getElementById("message"); //selecting Correct/Try again MSG
var h1Display = document.querySelector("h1"); //selecting Head1 display
var resetBtn = document.querySelector("#resetBtn"); //selecting reset Button
var modeBtns = document.querySelectorAll(".mode"); //selecting difficulty modes Buttons

colorDisplay.textContent = pickedColor; //changing rgb display's text content

//giving each square color from "colors" list
for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];

    //cliking every square and verify if that color matches with picked color
    square[i].addEventListener("click", function () {
        //if matched then change every square's color
        if (this.style.backgroundColor === pickedColor) {
            changeColor(pickedColor);
            messageDisplay.textContent = "Correct!"
            h1Display.style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play Again?";
        }
        // or else vanish that square from page
        else {
            this.style.backgroundColor = document.body.style.backgroundColor;
            messageDisplay.textContent = "Try Again";
        }
    })
}

//this function is changing every square's color into picked color
function changeColor(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}

//this function is picking random color from "colors" list
function PickColor() {
    return colors[Math.floor((Math.random() * colors.length))];
}

//this function is collecting all colors randomely and pushing in "colors" list
function generateColors(num) {
    var arr = []

    for (let i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}

//this function is picking all the colors randomely
function randomColors() {
    var red = Math.floor((Math.random() * 256));
    var green = Math.floor((Math.random() * 256));
    var blue = Math.floor((Math.random() * 256));

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

//selecting between "easy","medium" and "hard" mode
for (let i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function () {
        modeBtns[0].classList.remove("selected")
        modeBtns[1].classList.remove("selected")
        this.classList.add("selected");
        numOfSq = this.textContent === "Easy" ? 3 : 6;
        reset();
    })

}

//performing "Play Again?"/"New Colors" button
resetBtn.addEventListener("click", reset);

//operation of "Play Again?"/"New Colors" button
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