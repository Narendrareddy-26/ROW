import { createContext, useState, useEffect } from "react";
import * as api from "../api/cartApi";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const res = await api.getCart();
    setCart(res.data.items || []);
  };

  const addItem = async (item) => {
    await api.addToCart(item);
    loadCart();
  };

  const updateItem = async (id, qty) => {
    await api.updateCartItem(id, qty);
    loadCart();
  };

  const removeItem = async (id) => {
    await api.deleteCartItem(id);
    loadCart();
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, addItem, updateItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
