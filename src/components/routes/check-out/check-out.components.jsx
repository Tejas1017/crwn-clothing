import { useContext } from "react";
import { CartContext } from "../../../context/cart.context";
import CartItem from "../../cart-item/cart-item.components";

const CheckOut = () => {
  const { cartItems,addItemCart,removeItem } = useContext(CartContext);
  return (
    <div>
      <div>
        <h1>this is check out!</h1>
        <div>

        {cartItems.map((cartItem) => {
            const { id, name, quantity } = cartItem;
            return (
                <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={()=>addItemCart(cartItem)}>+</span>
              <br />
              <span onClick={()=>removeItem(cartItem)}>-</span>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
