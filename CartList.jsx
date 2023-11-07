const CartList = ({ cart, removeFromCart, emptyCart, total }) => {
  return (
    <div> 
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your Cart is Empty!</p>
      ) : (
        <div>
          <p>Number of items in the cart: {cart.length}</p>
          {cart.map((item) => (
            <div key={item.id} className="CartItem">
              <h3>{item.name}</h3>
              <p>Price: {item.price} </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
      <p>Total Price: ${total}</p>
      <button onClick={emptyCart}>Empty the cart</button>
      <button>Buy</button> {/* Define buyItems function elsewhere */}
    </div>
      )}
      </div>
  );
};

export default CartList;
