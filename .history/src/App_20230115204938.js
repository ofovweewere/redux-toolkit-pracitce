import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import Notification from "./components/Notification";
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  // const cartItems = useSelector((state) => state.cart.itemsList);
  // console.log(cartItems);
  return (
    <div className="App">
      <Notification type="success" message={"This is a dummy message"} />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
