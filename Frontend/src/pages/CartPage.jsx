import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import CartItem from "./components/CartItem";

const CartPage = () => {
  const { cart, updateItem, removeItem } = useContext(CartContext);

  return (
    <div>
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdate={updateItem}
            onDelete={removeItem}
          />
        ))
      )}
    </div>
  );
};

export default CartPage;
