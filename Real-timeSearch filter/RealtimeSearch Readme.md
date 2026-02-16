🔎 Real-Time User Search with Dynamic Cards

This project is a Real-Time Search Application built using:

HTML

CSS

TailwindCSS

Vanilla JavaScript

It dynamically renders user profile cards and filters them instantly while typing in the search input.

📘 About The Project

This project displays a list of user cards with:

Profile image

Name

Short bio

As the user types in the search bar:

The list updates instantly

Matching users are filtered in real-time

Cards are dynamically re-rendered

It also includes a blurred glass effect overlay design for modern UI styling.

🎯 Features

✅ Dynamic DOM card creation
✅ Real-time search filtering
✅ Case-insensitive search
✅ Modern UI with blur mask effect
✅ Clean card layout with overlay content
✅ Fully responsive flex layout

🛠️ Technologies Used

HTML5

CSS3 (Mask + Blur Effects)

TailwindCSS

JavaScript (Vanilla JS)

📂 Project Structure
📁 real-time-search
 ├── index.html
 ├── realtimesearch.js
 └── README.md

🧠 What I Learned

Creating elements dynamically using document.createElement()

Using append() and appendChild()

Clearing DOM using innerHTML

Filtering arrays using .filter()

Handling input events

Using .startsWith() for search matching

Creating blur mask effects with CSS

Combining Tailwind + custom CSS

🔍 Core JavaScript Logic
🔹 Rendering Function
function showUsers(arr)


Clears previous cards

Creates new cards dynamically

Appends image, blurred layer, and content

🔹 Search Logic
input.addEventListener("input", function () {


Converts text to lowercase

Filters users array

Re-renders matching results

🚀 How To Run

Clone this repository

Open index.html in your browser

Start typing in the search box

📌 Future Improvements

Search by bio also

Show “No users found” message

Add smooth card animation

Highlight matching text

Debounce input for performance

Add grid layout option

💡 Purpose

This project is part of my JavaScript practice series where I build small practical projects to strengthen:

DOM manipulation skills

Array methods

Event handling

UI building confidence

Instead of only learning theory, I focus on implementing real working logic.