import React from "react";
import weth from "../assets/weth.png";
import "./collectionCard.css";

const CollectionCard = ({ id, name, price, image }) => {
  return (
    <div className="collection-card">
      <img src={image} alt="punk" className="card-img" />
      <div className="card-details">
        <h2 className="card-title">{name}</h2>
        <p className="card-id">#{id}</p>
        <div className="price-container">
          <img src={weth} alt="" className="price-img" />
          <p className="card-price">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
