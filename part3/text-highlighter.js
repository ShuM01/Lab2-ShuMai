console.log("JS file loaded successfully");

// Select elements
const paragraphs = document.querySelectorAll(".paragraph");
const firstParagraph = document.querySelector(".paragraph");
const highlightBtn = document.getElementById("highlight-btn");
const clearBtn = document.getElementById("clear-btn");
const toggleBtn = document.getElementById("toggle-btn");

// Error checking
if (paragraphs.length === 0) console.error("No paragraphs found");
if (!firstParagraph) console.error("First paragraph not found");
if (!highlightBtn) console.error("Highlight button not found");
if (!clearBtn) console.error("Clear button not found");
if (!toggleBtn) console.error("Toggle button not found");

// Highlight All
highlightBtn.addEventListener("click", () => {
  paragraphs.forEach(p => p.classList.add("highlight"));
});

// Clear Highlights
clearBtn.addEventListener("click", () => {
  paragraphs.forEach(p => p.classList.remove("highlight"));
});

// Toggle First Paragraph
toggleBtn.addEventListener("click", () => {
  firstParagraph.classList.toggle("highlight");
});