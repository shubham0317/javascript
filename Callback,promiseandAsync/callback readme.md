🍞 Custom Toaster Notification Utility

This project is a Custom Toaster Notification Utility built using:

HTML

Tailwind CSS

Vanilla JavaScript

It dynamically creates toast notifications on the screen with configurable position, theme, and duration.

📘 About The Project

This project demonstrates how to:

Create reusable functions using closures

Dynamically create DOM elements

Apply conditional styling

Handle UI positioning programmatically

Remove elements automatically using setTimeout()

The toaster displays notification messages and automatically removes them after a defined duration.

🎯 Features

✅ Dynamic toast message creation
✅ Configurable position (Left / Right, Top / Bottom)
✅ Dark / Light theme support
✅ Auto-dismiss after custom duration
✅ Reusable toaster instance
✅ Clean Tailwind UI styling

🛠️ Technologies Used

HTML5

Tailwind CSS

JavaScript (ES6)

📂 Project Structure
📁 custom-toaster
 ├── index.html
 ├── toaster.js
 └── README.md

🧠 What I Learned

How Higher Order Functions work

How closures store configuration values

How to create elements using:

document.createElement("div")


How to append elements dynamically:

appendChild()


How to remove elements after delay:

setTimeout()


Conditional class handling using template literals

Dynamic UI positioning

🔍 Core JavaScript Logic
🔹 Create Toaster Function
function createToaster(config) {
    return function(str) {
        // Creates and displays toast
    }
}

🔹 Create Instance
let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "dark",
    duration: 3,
});

🔹 Show Toast
toaster("Download Done");

⚙️ Configuration Options
Property	Description
positionX	"left" or "right"
positionY	"top" or "bottom"
theme	"dark" or "light"
duration	Time in seconds
🚀 How To Run

Clone the repository

Make sure Tailwind CDN is added

Add a container div:

<div class="parent"></div>


Open index.html in your browser

Trigger toaster function

📌 Future Improvements

Add fade-in / fade-out animation

Add success / error / warning variants

Add stacking multiple toasts properly

Add close button

Add progress indicator

Convert into small reusable library

🧑‍💻 Author

Shubham Chandrakar
BCA Student | Frontend Developer