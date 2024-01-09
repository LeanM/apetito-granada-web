import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext({});

const localStorageCart = () => {
  const localStorageCart = localStorage.getItem("cart");
  return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(localStorageCart());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (selectedMenu) => {
    let updatedCart = [];
    if (selectedMenu !== "") {
      if (!isMenuAlreadyInCart(selectedMenu)) {
        cart.map((menu) => {
          updatedCart.push(menu);
          return 0;
        });
        //Now push the new Menu
        updatedCart.push({
          categoryMenu: selectedMenu,
        });
        console.log(updatedCart);
        setCart(updatedCart);
        toast.success("Menu succesfully added to the selections!");
      } else toast.error("The menu is already in the selection!");
    }
  };

  const removeFromCart = (menuToDelete) => {
    let updatedCart = [];
    if (menuToDelete !== "") {
      cart.map((menu) => {
        if (menu !== menuToDelete) updatedCart.push(menu);
        return 0;
      });
    }

    setCart(updatedCart);
  };

  const cartLength = () => {
    return cart.length;
  };

  const isMenuAlreadyInCart = (selectedMenu) => {
    return cart.find(
      (categoryMenu) => categoryMenu.categoryMenu === selectedMenu
    );
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        cartLength,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
