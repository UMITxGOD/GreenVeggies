import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    const items = Object.keys(newCart);
    let subT = 0;
    for (let i = 0; i < items.length; i++)
      subT += newCart[items[i]].price * newCart[items[i]].qty;
    setSubTotal(subT);
  };
  const addToCart = (cartId, qty, price, name, size, varient) => {
    const newCart = cart;
    if (cartId in cart) newCart[cartId].qty += 1;
    else newCart[cartId] = { qty: 1, price, name, size, varient };
    setCart(newCart);
    saveCart(newCart);
  };
  const removeFromCart = (cartId, qty, price, name, size, varient) => {
    const newCart = cart;
    if (cartId in cart) newCart[cartId].qty -= 1;
    if (newCart[cartId].qty <= 0) delete newCart[cartId];
    setCart(newCart);
    saveCart(newCart);
  };
  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear;
      setCart({});
    }
  }, []);
  return (
    <div>
      <Navbar
        key={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        cart={cart}
      />
      <Component
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        cart={cart}
        {...pageProps}
      />
      <Footer />
    </div>
  );
}

export default MyApp;
