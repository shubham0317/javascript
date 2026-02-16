⬇️ Download Progress Bar Simulation

This project is a Download Progress Bar Simulation built using:

HTML

CSS

Vanilla JavaScript

It visually simulates a file downloading process using setInterval() and dynamically updates the UI.

📘 About The Project

This project demonstrates how to:

Create a progress bar UI

Simulate downloading using setInterval()

Update DOM elements dynamically

Clear intervals properly

Reset state manually

The progress increases from 0% to 100%, showing a smooth animation effect.

🎯 Features

✅ Animated progress bar
✅ Dynamic percentage update
✅ Download status message change
✅ Start button functionality
✅ Reset button functionality
✅ Smooth width transition effect

🛠️ Technologies Used

HTML5

CSS3 (Gradient + Transitions)

JavaScript (Vanilla JS)

📂 Project Structure
📁 download-progress-bar
 ├── index.html
 ├── downloadbar.js
 └── README.md

🧠 What I Learned

How setInterval() works

How to stop interval using clearInterval()

How to dynamically update styles using:

element.style.width = "50%"


How to update text using:

textContent


Managing state using variables (count)

Button event handling

🔍 Core JavaScript Logic
🔹 Start Download
startbtn.addEventListener("click", function () {


Starts interval

Increases count

Updates progress bar width

Updates percentage text

Changes status message

Stops at 100%

🔹 Reset Download
resetbtn.addEventListener("click", function () {


Resets count to 0

Resets progress bar width

Resets percentage text

Resets status message

🚀 How To Run

Clone this repository

Open index.html in your browser

Click Start Download

Click Reset to restart

📌 Future Improvements

Disable start button while downloading

Prevent multiple intervals on multiple clicks

Add pause/resume feature

Add real file download integration

Add circular progress bar version

Add sound effect when download completes