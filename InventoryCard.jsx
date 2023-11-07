const InventoryCards = ({ products, addToCart }) => {
 return (
    <div>
      <h2>Inventory</h2>
     <div className="Inventory-cards">
      {products.map((product) => (
        <div key={product.id} className="inventory-card">
         <img src={product.image} alt={product.productName} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price} $</p>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
    </div>
 );
};

export default InventoryCards; 