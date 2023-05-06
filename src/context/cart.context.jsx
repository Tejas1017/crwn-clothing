import { createContext, useEffect, useState } from "react";
const addItem = (cartItems, productToAdd) => {
  const exictingCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (exictingCart) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const itemToRemoveFromCart = (cartItems, itemToRemove) => {
  const exictingCart = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (exictingCart.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItem: () => {},
  cartCount: 0,
  removeItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  const addItemCart = (productToAdd) => {
    setCartItem(addItem(cartItems, productToAdd));
  };
  const removeItem = (itemToRemove) => {
    setCartItem(itemToRemoveFromCart(cartItems, itemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemCart,
    cartItems,
    cartCount,
    removeItem
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
