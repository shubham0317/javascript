🛒 Modern JavaScript Store

A modern Vanilla JavaScript E-commerce Store that demonstrates state management, cart functionality, product filtering, sorting, search with debounce, and checkout simulation using pure JavaScript (no frameworks).

This project focuses on clean architecture, modular JavaScript, and real-world frontend logic.

🚀 Features
🛍️ Product Listing

Displays products in a responsive grid

Shows product image, title, and price

Add to cart functionality

Out-of-stock detection based on product stock

🔎 Search with Debounce

Live product search

Uses debounce function to optimize performance

Prevents unnecessary re-rendering while typing

🎯 Filtering

Users can filter products by:

Category

Price (Low → High)

Price (High → Low)

🧹 Clear Filters

Reset all filters to default

Quickly return to full product list

🛒 Cart System

Fully functional cart with:

Add product to cart

Increase quantity

Decrease quantity

Remove item

Automatic stock check

Real-time cart total

📦 Cart Sidebar

Slide-in cart UI

Overlay background

Close cart using overlay or close button

💾 Local Storage

Cart data is stored in Local Storage, so cart items remain even after page refresh.

Stored format example:

[
  { "productId": 1, "quantity": 2 },
  { "productId": 4, "quantity": 1 }
]
💳 Checkout System

Checkout modal shows:

Order summary

Product quantities

Total price

After confirming order:

Cart resets

Modal closes

Toast notification appears

🔔 Toast Notification

After successful order confirmation:

A toast notification appears

Automatically disappears after 5 seconds

🧠 Concepts Implemented

This project demonstrates several important JavaScript concepts:

State management

Event delegation

Debouncing

DOM rendering

Local storage

Modular JavaScript

Dynamic UI rendering

Cart logic

Filtering and sorting algorithms

🏗️ Project Structure
project-folder
│
├── js
│   ├── Store.js
│   ├── state.js
│   └── main.js
│
├── css
│   ├── style.css
│   └── variables.css
│
├── images
│
├── index.html
└── README.md
⚙️ Core Architecture

The project follows a centralized state management approach.

State → Render → UI Update

Whenever something changes:

Add item

Remove item

Filter products

Search

Checkout

The render() function updates the UI.

function render() {
  renderProducts();
  updateCartCount();
  renderCartVisibility();
  renderCart();
  saveCart();
  renderCheckOut();
}

This keeps the UI synchronized with the application state.

🔧 Technologies Used

HTML5

CSS3

JavaScript (ES6+)

Local Storage API

No frameworks or libraries were used.

📚 Key JavaScript Implementations
Debounce Function

Optimizes search input performance.

function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
Event Delegation

Instead of attaching events to every button:

grid.addEventListener("click", function(e) {
  if(e.target.tagName === 'BUTTON'){
    const id = Number(e.target.dataset.id);
    const product = state.products.find(
      product => product.id === id
    );
    state.cart.addItems(product);
    render();
  }
});

This improves performance and scalability.

🖥️ How to Run the Project
1️⃣ Clone the repository
git clone https://github.com/yourusername/js-store.git
2️⃣ Open the folder
cd js-store
3️⃣ Run the project

Simply open:

index.html

in your browser.

No installation required.