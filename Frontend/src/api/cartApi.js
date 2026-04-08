import axios from "axios";

const BASE = "http://localhost:8081/api/cart";

export const getCart = () => axios.get(BASE);

export const addToCart = (data) => axios.post(`${BASE}/items`, data);

export const updateCartItem = (id, quantity) =>
  axios.put(`${BASE}/items/${id}?quantity=${quantity}`);

export const deleteCartItem = (id) => axios.delete(`${BASE}/items/${id}`);
