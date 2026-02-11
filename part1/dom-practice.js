
const title = document.getElementById("title");
if (!title) {
  console.error("Title element not found");
} else {
  console.log("Title:", title);
}

// Select first paragraph using querySelector
const firstParagraph = document.querySelector(".info");
if (!firstParagraph) {
  console.error("No paragraph with class 'info' found");
} else {
  console.log("First paragraph:", firstParagraph);
}

// Select all action buttons using querySelectorAll
const actionButtons = document.querySelectorAll(".action-btn");
if (actionButtons.length === 0) {
  console.error("No action buttons found");
} else {
  console.log("Action buttons:", actionButtons);
}

// Select special button
const specialBtn = document.getElementById("special-btn");
if (!specialBtn) {
  console.error("Special button not found");
} else {
  console.log("Special button:", specialBtn);
}