import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import Shop from "./Shop";
import Cart from "./Cart";
import { Layout } from "./Layout";
import ShopPage from "../Pages/ShopsPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };
  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShopPage />} />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
