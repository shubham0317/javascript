🗂️ Kanban Board – Drag & Drop Task Manager

A simple and interactive Kanban Board built using Vanilla JavaScript, HTML, and CSS.
This project allows users to create, delete, drag, and drop tasks across different columns with data persistence using Local Storage.

🚀 Features

✅ Add new tasks using a modal form

✅ Drag & Drop tasks between columns

✅ Delete tasks instantly

✅ Task count updates dynamically

✅ Data persistence using localStorage

✅ Clean and minimal UI

✅ Fully built with Vanilla JavaScript (No frameworks)

📌 Project Structure
📁 kanban-board
 ├── index.html
 ├── style.css
 ├── index.js
 └── README.md
🧠 How It Works
1️⃣ Task Creation

Tasks are dynamically created using JavaScript.

Each task contains:

Title

Description

Delete button

Tasks are draggable.

2️⃣ Drag & Drop System

drag event stores the dragged element.

dragover allows dropping.

drop appends the task to the target column.

Task data updates automatically after dropping.

3️⃣ Data Persistence

Tasks are stored in this format inside localStorage:

{
  "to-do": [
    { "title": "Learn JS", "desc": "Practice closures" }
  ],
  "progress": [],
  "done": []
}

Each column ID acts as a key in the taskData object.

4️⃣ Modal System

Click "Add Task" to open modal.

Background click closes modal.

On submit:

Task is added to "To-Do" column

Input fields reset

Modal closes automatically

🛠️ Technologies Used

HTML5

CSS3

JavaScript (ES6)

Local Storage API

Drag and Drop API

📂 Columns

📝 To-Do

🚧 Progress

✅ Done

Each column dynamically updates its task count.

🎯 Key Concepts Implemented

DOM Manipulation

Event Delegation

Drag & Drop API

Dynamic Object Keys

Local Storage Handling

Array Methods (map, forEach, Array.from)

📸 Demo

You can run the project locally:

git clone https://github.com/your-username/kanban-board.git

Then open index.html in your browser.

🧑‍💻 Author

Shubham Chandrakar
BCA Student | Frontend Developer
Passionate about building real-world JavaScript projects.

📈 Future Improvements

Edit task feature

Task priority system

Due dates

Backend integration (MongoDB)

Authentication system