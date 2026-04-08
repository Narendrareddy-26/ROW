import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const AddToCart = ({ product }) => {
  const { addItem } = useContext(CartContext);

  return (
    <button
      onClick={() =>
        addItem({
          productId: product.id,
          quantity: 1,
          price: product.price,
        })
      }
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
