import { productsData } from "./data/prodductData.js"
import { Product } from "./modals/product.js"
import { Cart } from "./modals/Cart.js"
import { state } from "./state.js"
import { CartItem } from "./modals/CartItem.js"


export class Store {
    constructor() {
        this.init();
    }

    init() {
        this.localProducts();
        this.initCart();
    }

    localProducts() {
        state.products = productsData.map (
            data => 
                new Product (
                    data.id,
                    data.title,
                    data.price,
                    data.category,
                    data.image,
                    data.stock
                )
        )
    }

    initCart() {
        state.cart = new Cart();
        const savedCart = localStorage.getItem("cart");
        if(!savedCart) return;
        const parsed = JSON.parse(savedCart);
        parsed.forEach(savedItem => {
            const product = state.products.find(
                p => p.id === savedItem.productId
            );
           
         if(!product) return //Ignore deleted proucts
         
         const safeQuantity= Math.min(
             savedItem.quantity,
             product.stock
         );

         state.cart.items.push(
           new CartItem(product, safeQuantity)
          );

        })
    }
} 