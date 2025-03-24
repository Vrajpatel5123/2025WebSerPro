import { ref} from 'vue'
import { addNotification } from './notifications';
import type { Product } from './product';
/* */

export interface Cartitem {
    product : Product
    quantity: number
}

const cart = ref<Cartitem[]>([])
               
export function refCart(){
    return cart
}
export function addToCart(product: Product, quantity: number = 1) {
    const item = cart.value.find(item => item.product.id === product.id) 
//.find() method returns the value of the first element in the provided array that satisfies the provided testing function
    if (item) {
        item.quantity += quantity;
        addNotification({
            message: 'Item already in cart. Quantity updated',
            type: 'info',
        })
        return;
    } else{
    cart.value.push();
    addNotification({
        message: `Added ${quantity} ${product.title} to Cart`,
        type: 'success',
    })
    }
}