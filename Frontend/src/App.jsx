import React from "react";
import { CartProvider } from "./context/cartContext";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      {" "}
      {}
      <CartPage />
    </CartProvider>
  );
}

export default App;
