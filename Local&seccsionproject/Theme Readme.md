🌗 Theme Preference Toggle (Light/Dark Mode)

This is a small JavaScript project that demonstrates how to implement a Light and Dark Theme Toggle using:

HTML

CSS (Custom Properties / Variables)

JavaScript

LocalStorage

System Theme Detection

📘 About The Project

This project automatically:

Detects the user’s system theme preference

Applies Light or Dark mode

Allows manual theme switching using a button

Saves the selected theme in LocalStorage

Updates theme dynamically when system preference changes (if no manual theme is set)

This helps in understanding:

DOM manipulation

Event listeners

LocalStorage usage

matchMedia() API

CSS variables

Theme persistence logic

🎯 Features

✅ Detect system theme using prefers-color-scheme
✅ Toggle between Light & Dark mode
✅ Store theme in LocalStorage
✅ Smooth theme transition effect
✅ Automatic update on system theme change

🛠️ Technologies Used

HTML5

CSS3 (Custom Properties / Variables)

JavaScript (Vanilla JS)

📂 Project Structure
📁 theme-toggle-project
 ├── index.html
 ├── Pr.js
 └── README.md

🧠 What I Learned

How to use window.matchMedia()

How to listen for system theme changes

How to persist user preference using LocalStorage

Clean separation of logic using reusable functions

How to apply dynamic classes to <body>

🔍 Core JavaScript Logic

applyTheme(theme) → Applies selected theme

setSystemTheme() → Detects and sets system theme

mediaQuery.addEventListener() → Listens for system theme changes

localStorage.setItem() → Saves user preference

🚀 How To Run

Clone this repository

Open index.html in your browser

Click the Toggle Theme button

📌 Future Improvements

Add icon change (🌙 / ☀️)

Add animated theme switch

Add multiple theme options

Add reset-to-system button

💡 Purpose

This project is part of my JavaScript practice series where I build small focused projects to deeply understand core concepts instead of only learning theory.