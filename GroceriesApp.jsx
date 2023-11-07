import { useState } from 'react';
import InventoryCards from './InventoryCard';
import CartList from './CartList';
import { products } from './products';

const GroceriesApp = () => {
   const [inventory] = useState(products);
   const [cart, setCart] = useState([]);

   const addToCart = (product) => {
      setCart([...cart, product]);
   };

   const removeFromCart = (productId) => {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
   };

   const emptyCart = () => {
      setCart([]);
   };

   const calculateTotalPrice = () => {
      // Calculate the total price of items in the cart
      const total = cart.reduce((total, item) => {
         const price = parseFloat(item.price.replace('$', ''));
         return total + price;
      }, 0);

      return total.toFixed(2); 
   };

   return (
      <div className="App">
         <InventoryCards inventory={inventory} addToCart={addToCart} />
         <CartList cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} total={calculateTotalPrice()} />
      </div>
   );
}

export default GroceriesApp;
