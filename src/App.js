import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Hero from "./component/hero";
import Menu from "./component/Menu";
import Cart from "./component/Cart";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://deliveroobackend.herokuapp.com/");
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div className="container">
        <Hero data={data} />
        <div style={{ display: "flex" }}>
          <div>
            {data.categories.map((menu, index) => {
              return menu.meals.length > 0 && <Menu key={index} menu={menu} />;
            })}
          </div>
        <Cart cart={cart} setCart={setCart} empty={cart.length > 0 ? false : true}
          />
        </div>
      </div>
    </>
  );
}

export default App;
