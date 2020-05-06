import React from "react";
import "./hero.css"


const Hero = ({data}) => {
  return (
    <div className="FormHero">
      <div>
        <p className="logo"> deliveroo </p>
      </div>
      <hr />
      <div className="Header">
        <div>
          <h2 className="Title"> {data.restaurant.name} </h2>
          <p className="DescResto"> {data.restaurant.description} </p>
        </div>
        <img className="image" src={data.restaurant.picture} alt="Restaurant" />
      </div>
    </div>
  );
};

export default Hero;
