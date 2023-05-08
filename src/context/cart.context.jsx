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
const clearItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItem: () => {},
  cartCount: 0,
  removeItem: () => {},
  removeItemFromCart: () => {},
  total:0
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItem] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);
  const addItemCart = (productToAdd) => {
    setCartItem(addItem(cartItems, productToAdd));
  };
  const removeItem = (itemToRemove) => {
    setCartItem(itemToRemoveFromCart(cartItems, itemToRemove));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItem(clearItemFromCart(cartItems, itemToRemove));
  };

  

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemCart,
    cartItems,
    cartCount,
    removeItem,
    removeItemFromCart,
    cartTotal
    

    
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
