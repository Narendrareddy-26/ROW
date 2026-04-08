import React, { useEffect, useState } from "react";
import { getAllOrders, getOrderById } from "../services/orderService";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [singleOrder, setSingleOrder] = useState(null);
  const [error, setError] = useState("");

  const loadAll = async () => {
    try {
      const response = await getAllOrders();
      setOrders(response.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load orders");
    }
  };

  const loadOne = async () => {
    if (!searchId) {
      return;
    }
    try {
      const response = await getOrderById(searchId);
      setSingleOrder(response.data);
      setError("");
    } catch (err) {
      setSingleOrder(null);
      setError(err.response?.data?.message || "Order not found");
    }
  };

  useEffect(() => {
    loadAll();
  }, []);

  return (
    <div className="card">
      <h2>Admin Dashboard</h2>
      <div className="row">
        <input
          placeholder="Order ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={loadOne}>Find Order</button>
        <button onClick={loadAll}>Refresh All</button>
      </div>

      {error && <p>{error}</p>}

      {singleOrder && (
        <div className="item">
          <h3>Selected Order</h3>
          <p>ID: {singleOrder.id}</p>
          <p>User: {singleOrder.userId}</p>
          <p>Total: {singleOrder.totalAmount}</p>
          <p>Status: {singleOrder.status}</p>
        </div>
      )}

      <h3>All Orders</h3>
      {orders.map((order) => (
        <div key={order.id} className="item">
          <p>ID: {order.id}</p>
          <p>User: {order.userId}</p>
          <p>Total: {order.totalAmount}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}

      {orders.length === 0 && !error && <p>No orders available.</p>}
    </div>
  );
}

export default AdminDashboard;
