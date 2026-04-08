import React, { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";

function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "1");
  const [error, setError] = useState("");

  const loadOrders = async () => {
    try {
      localStorage.setItem("userId", userId);
      const response = await getOrders(Number(userId));
      setOrders(response.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load orders");
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="card">
      <h2>My Orders</h2>
      <label>User ID</label>
      <div className="row">
        <input value={userId} onChange={(e) => setUserId(e.target.value)} />
        <button onClick={loadOrders}>Load</button>
      </div>

      {error && <p>{error}</p>}

      {orders.map((order) => (
        <div key={order.id} className="item">
          <p>Order ID: {order.id}</p>
          <p>Total: {order.totalAmount}</p>
          <p>Status: {order.status}</p>
          <p>Created: {order.createdAt}</p>
        </div>
      ))}

      {orders.length === 0 && !error && <p>No orders found.</p>}
    </div>
  );
}

export default OrderHistoryPage;
