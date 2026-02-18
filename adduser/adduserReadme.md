👤 Dynamic Profile Manager

This project is a Dynamic Profile Manager Utility built using:

HTML

CSS

Vanilla JavaScript

It dynamically creates profile cards with image, name, role, and delete functionality.

📘 About The Project

This project demonstrates how to:

Work with object-based architecture

Manage state using arrays

Dynamically create DOM elements

Handle this context properly

Use arrow functions and bind

Implement dynamic delete functionality

Build mini CRUD-like UI logic

The application allows users to add profiles dynamically and remove them instantly using a delete (❌) button.

🎯 Features

✅ Add new user profile
✅ Display profile image in circular format
✅ Dynamic DOM creation
✅ Delete user with ❌ button
✅ Proper state management using object
✅ Clean UI structure
✅ Event handling with arrow functions

🛠️ Technologies Used

HTML5

CSS3

JavaScript (ES6)

📂 Project Structure
📁 profile-manager
 ├── index.html
 ├── style.css
 └── adduser.js

🧠 What I Learned

How object methods manage internal state

How this behaves in:

Normal functions

Arrow functions

Event listeners

How .bind() works

How to dynamically create elements using:

document.createElement()


How to add classes dynamically:

element.classList.add()


How to attach event listeners properly

How to remove items from array using:

splice()


How to re-render UI after state change

🔍 Core JavaScript Logic
🔹 User Manager Object
const userManager = {
  users: [],
  init() {},
  addUser() {},
  renderui() {},
  removeUser(index) {}
};

🔹 Adding User
this.users.push({
  username,
  role,
  profilePic
});

🔹 Delete User
cross.addEventListener("click", () => {
  this.removeUser(index);
});

🚀 How To Run

Clone the repository

Open index.html in your browser

Fill the form

Click submit

Profile will appear dynamically

Click ❌ to remove profile

📌 Future Improvements

Add Edit profile feature

Add LocalStorage persistence

Add smooth animation on delete

Add profile validation

Add drag-and-drop sorting

Convert into reusable component

🧑‍💻 Author

Shubham Chandrakar
BCA Student | Frontend Developer
Mahasamund, Chhattisgarh