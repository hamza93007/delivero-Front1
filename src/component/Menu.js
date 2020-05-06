import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";


const Menu = ({ menu }) => {
  return (
    <div>
      <h1>{menu.name}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>

        {menu.meals.map((item, index) => {
          return <MenuItem key={item.id} item={item} />
        })}
      </div>
    </div>
  );
};

export default Menu;

