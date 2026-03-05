import { CartItem } from "./CartItem.js";

export class Cart {
  constructor() {
 this.items = [];
  }

  addItems(product) {
    if(!product) return;

    if(product.stock === 0) return;

   const existingItem = this.items.find(
    item => item.product.id === product.id
   );

   if(existingItem) { 
    if(existingItem.quantity < product.stock) {
       existingItem.quantity++;
    }
   } else {
    this.items.push(new CartItem(product));
   }
  }

  removeItem(productId){
   this.items = this.items.filter(
    item => item.product.id !== productId
   );
  }

  increaseQty(productId) {
    const item = this.items.find(
      item => item.product.id === productId
    );

    if (!item) return;

    // Prevent exceeding stock
    if (item.quantity < item.product.stock) {
      item.quantity++;
    }
  }

 decreaseQty(productId) {
    const item = this.items.find(
      item => item.product.id === productId
    );

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
      this.removeItem(productId);
    }
  }
  
  getTotal() {
    return this.items.reduce(
      (total,item) => total + item.product.price * item.quantity,
   0)
  }
   getTotalItems() {
    return this.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }
}