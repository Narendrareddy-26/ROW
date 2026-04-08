import axios from "axios";

const API = "http://localhost:8080/api";

export const placeOrder = (userId, items) =>
  axios.post(`${API}/orders`, { userId, items });

export const getOrders = (userId) =>
  axios.get(`${API}/orders`, { params: { userId } });

export const getAllOrders = () =>
  axios.get(`${API}/admin/orders`);

export const getOrderById = (id) =>
  axios.get(`${API}/admin/orders/${id}`);
