import React from "react";

const CartItem = ({ item, onUpdate, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h4>Product ID: {item.productId}</h4>

      <p>Price: ₹{item.price}</p>

      <div>
        <button onClick={() => onUpdate(item.id, item.quantity - 1)}>-</button>

        <span style={{ margin: "0 10px" }}>{item.quantity}</span>

        <button onClick={() => onUpdate(item.id, item.quantity + 1)}>+</button>
      </div>

      <button
        style={{ marginTop: "10px", color: "red" }}
        onClick={() => onDelete(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
