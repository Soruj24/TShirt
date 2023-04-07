import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import { toast } from "react-toastify";
const Home = () => {
  const tshiets = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = tshirt => {
    const exisrt = cart.find(ts => ts._id === tshirt._id);

    if (exisrt) {
      toast("Cart already exists ");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = id => {
    const ramaing = cart.filter(ts => ts._id !== id);
    setCart(ramaing);
  };

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tshiets.map(tshirt => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default Home;
