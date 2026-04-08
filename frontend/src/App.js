import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="container">
      <h1>ROW - Order Module (Person 4)</h1>
      <nav className="nav">
        <Link to="/">Order Page</Link>
        <Link to="/history">Order History</Link>
        <Link to="/admin">Admin Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<OrderPage />} />
        <Route path="/history" element={<OrderHistoryPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
