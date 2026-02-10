// Select all boxes
const boxes = document.querySelectorAll(".box");


const redBtn = document.getElementById("btn-red");
const blueBtn = document.getElementById("btn-blue");
const greenBtn = document.getElementById("btn-green");
const resetBtn = document.getElementById("reset-btn");

// Error checking
if (boxes.length === 0) console.error("No boxes found");
if (!redBtn) console.error("Red button not found");
if (!blueBtn) console.error("Blue button not found");
if (!greenBtn) console.error("Green button not found");
if (!resetBtn) console.error("Reset button not found");


function changeColor(color) {
  boxes.forEach(box => {
    box.style.backgroundColor = color;
  });
}

// Event listeners
redBtn.addEventListener("click", () => changeColor("red"));
blueBtn.addEventListener("click", () => changeColor("blue"));
greenBtn.addEventListener("click", () => changeColor("green"));
resetBtn.addEventListener("click", () => changeColor("lightgray"));