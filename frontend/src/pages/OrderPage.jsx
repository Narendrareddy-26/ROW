import React, { useState } from "react";
import { placeOrder } from "../services/orderService";

function OrderPage() {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "1");
  const [itemsText, setItemsText] = useState(
    JSON.stringify(
      [
        { productId: 1, quantity: 2, price: 100 },
        { productId: 2, quantity: 1, price: 50 }
      ],
      null,
      2
    )
  );
  const [message, setMessage] = useState("");

  const handlePlaceOrder = async () => {
    try {
      localStorage.setItem("userId", userId);
      const items = JSON.parse(itemsText);
      const response = await placeOrder(Number(userId), items);
      setMessage(`Order placed. ID: ${response.data.id}, Total: ${response.data.totalAmount}`);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to place order");
    }
  };

  return (
    <div className="card">
      <h2>Place Order</h2>
      <label>User ID</label>
      <input value={userId} onChange={(e) => setUserId(e.target.value)} />

      <label>Items JSON (productId, quantity, price)</label>
      <textarea
        rows="10"
        value={itemsText}
        onChange={(e) => setItemsText(e.target.value)}
      />

      <button onClick={handlePlaceOrder}>Place Order</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default OrderPage;
