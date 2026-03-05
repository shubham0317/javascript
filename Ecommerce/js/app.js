import { Store } from "./Store.js";
import { state } from "./state.js";

function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

// searchInput.addEventListener(
//   "input",
//   debounce((e) => {
//     state.filters.search = e.target.value;
//     render();
//   }, 300)
// );

const store = new Store();

console.log("STATE AFTER INIT:", state);

const cartBtn = document.getElementById("cart-btn");
const closeCart = document.getElementById("close-cart");
const overlay = document.getElementById("overlay");

// Open cart
cartBtn.addEventListener("click", () => {
  state.isCartOpen = true;
  render();
});

// Close cart (X)
closeCart.addEventListener("click", () => {
  state.isCartOpen = false;
  render();
});

// Close cart when clicking overlay
overlay.addEventListener("click", () => {
  state.isCartOpen = false;
  render();
});

function render () {
   renderProducts();
    updateCartCount();
   renderCartVisibility();
    renderCart();
    saveCart();
    renderCheckOut();
}





function saveCart () {
  const simplifiedCart = state.cart.items.map(
    item => ({
     productId: item.product.id,
     quantity: item.quantity
    })
  )
  localStorage.setItem("cart",JSON.stringify(simplifiedCart))
}



function renderCartVisibility() {
  const cartSidebar = document.getElementById("cart-sidebar");
  const overlay = document.getElementById("overlay");

  if (state.isCartOpen) {
    cartSidebar.classList.add("active");
    overlay.classList.add("active");
  } else {
    cartSidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
}


function renderProducts() {
  const grid = document.querySelector("#product-grid");
  let emptyProduct = document.querySelector("#empty-products")
  
let filteredProducts = [...state.products];


if (state.filters.category !== "all") {
  filteredProducts = filteredProducts.filter(
    p => p.category === state.filters.category
  );
}  


filteredProducts = filteredProducts.filter(
  p => p.title.toLowerCase().includes(
    state.filters.search.toLowerCase()
  )
);

if(state.filters.sort === 'price-low' ){
  filteredProducts.sort((a,b)  => a.price - b.price);
}

if(state.filters.sort === 'price-high' ){
  filteredProducts.sort((a,b)  => b.price - a.price);
}

if (filteredProducts.length === 0) {
    emptyProduct.classList.remove("hidden");
    grid.innerHTML = "";
    return;
  } else {
    emptyProduct.classList.add("hidden");
  }

  grid.innerHTML = filteredProducts
    .map(product =>{
     const cartItem = state.cart.items.find(
      item => item.product.id === product.id
     );
    const quantityInCart = cartItem ? cartItem.quantity : 0;
    const isOutOfStock = quantityInCart >= product.stock

      return `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}" />
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">₹${product.price}</p>
        <button data-id="${product.id}
        ${isOutOfStock ? "disabled" : ""}
        ">
          ${isOutOfStock ? "Out of stock" : "Add to Cart"}
        </button>
      </div>
    `})
    .join("");
  
   

}

const searchInput = document.getElementById("search");

searchInput.addEventListener(
  "input",
  debounce((e) => {
    state.filters.search = e.target.value;
    render();
  }, 300)
);

document.getElementById("category-filter").addEventListener("change", (e) => {
  state.filters.category = e.target.value;
  render();
})

document.getElementById("sort-filter")
  .addEventListener("change", (e) => {
    state.filters.sort = e.target.value;
    render();
 });

function updateCartCount() {
  document.getElementById("cart-count").textContent =
    state.cart.getTotalItems();
}

const grid = document.querySelector("#product-grid");
 grid.addEventListener("click", function(e) {
      if(e.target.tagName === 'BUTTON'){
        const id = Number(e.target.dataset.id);
        const product = state.products.find(
       product => product.id === id
);
        state.cart.addItems(product);
        render();
      }
      
})
render();

function renderCart() {
 const cartItems = document.querySelector("#cart-items");
 const emptyCart = document.querySelector("#empty-cart");
 
  if(state.cart.items.length === 0) {
    cartItems.innerHTML = "";
  emptyCart.classList.remove("hidden");
  } else {
  emptyCart.classList.add("hidden");
    cartItems.innerHTML =  state.cart.items
 .map(item => {
  const isMaxReached = item.quantity >= item.product.stock;
 return  `
    <li>
    <span>${item.product.title}</span>
    <div class="qty-controls">
    <button data-action="decrease" data-id=${item.product.id}>-</button>
      <span>${item.quantity}</span>
     <button 
            data-action="increase" 
            data-id="${item.product.id}"
            ${isMaxReached ? "disabled" : ""}
          >
            +
          </button>
    </div>
    <button data-action="remove" data-id=${item.product.id}>Remove</button>
    </li>
 `}).join("");
 
 }

 document.getElementById("cart-total").textContent =
  state.cart.getTotal();
 
}

const cartList = document.querySelector(".cart-items");
cartList.addEventListener("click", function(e) {
  if(!e.target.dataset.action) return;
  const id = Number(e.target.dataset.id);
  const action = e.target.dataset.action;

  if(action === "increase") {
    state.cart.increaseQty(id);
  }

  if(action === "decrease") {
    state.cart.decreaseQty(id);
  }

  if(action === "remove") {
    state.cart.removeItem(id);
  }

  render();

})


document.querySelector(".checkout-btn")
.addEventListener("click", () =>{
  if(state.cart.items.length === 0) return;
  state.isCheckoutOpen = true;
  render();
})

function renderCheckOut() {
   const checkOutModal =  document.querySelector("#checkout-modal");
   const checkOutModalContent =  document.querySelector(".modal-content");
   if(!state.isCheckoutOpen){
    checkOutModal.classList.add("hidden");
    return;
   }

   checkOutModal.classList.remove("hidden");

   const summary = state.cart.items.map(
    item => `
    <div class="checkout-item">
    <span>${item.product.title}</span>
    <span>${item.quantity} * ${item.product.price}</span>
    </div> `
   ).join("");

   checkOutModalContent.innerHTML = `
   <h2>Order Summary</h2>
   ${summary}
   <h3>Total: ${state.cart.getTotal()}</h3>
   <button  id ="confirm-order"> Confirm Order </button>
   `
}


document.body.addEventListener("click", (e) => {
  if (e.target.id === "confirm-order") {
    
    state.cart.items = [];
    state.isCheckoutOpen = false;
    state.isCartOpen = false;
    const toast = document.querySelector("#toast");

    // Show toast immediately
    toast.classList.remove("hidden");

    // Hide after 3 seconds
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 5000);
  }

  render();
});

const clearFilter = document.querySelector("#clear-filters")

clearFilter.addEventListener("click", function () {
  state.filters.category = "all";
  state.filters.sort = 'default';
  render();
});








