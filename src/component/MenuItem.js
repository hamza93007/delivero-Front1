import React from "react";
import "./MenuItem.css";



  const MenuItem = ({ item }) => {
    return (
      <div className="formBox" >
        <div>
          <h2>{item.title}</h2>
          {item.description.length > 0 && (
            <p>{item.description.slice(0, 60)}...</p>
            )}
          <span>{item.price} €       </span>
          {item.popular && <span style={{ color: "orange",fontWeight:"bold" }}>Populaire</span>}
        </div>
  
        {item.picture && (
          <img
            alt={item.title}
            src={item.picture}
          />
        )}
      </div>
    );
  };
  
  export default MenuItem;

