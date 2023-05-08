import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const CheckOutItem = ({ cartItem }) => {
  const { removeItemFromCart,addItemCart, removeItem  } = useContext(CartContext);
  const clearItemFromCart = () => {
    removeItemFromCart(cartItem);
  };
  const decrementItemFromCart =()=>{
    removeItem(cartItem)
  }
  const incrementItemFromCart = ()=>{
    addItemCart(cartItem)
  }

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">
        <div className="sub">
            <span onClick={decrementItemFromCart}>
            &#10094;
            </span> 
        </div>
        {quantity}
        <div className="pulse">
            <span onClick={incrementItemFromCart}>
            &#10095;
            </span>
        </div>
        </span>
      <div className="remove-button" onClick={clearItemFromCart}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckOutItem;
