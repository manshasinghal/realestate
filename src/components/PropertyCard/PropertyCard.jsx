import React from "react";
import './PropertyCard.css'
import {truncate} from 'lodash'
import Heart from "../Heart/Heart";
import { useNavigate } from "react-router-dom";
// import Heart from "../Heart/Heart";
const PropertyCard = ({card}) => {

  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties/${card.id}`)}
    >
  <Heart id={card?.id}/>
      <img src={card.image} alt="home" />
      <span className="Text r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <p className="Text">{truncate(card.title, {length: 15})}</p>
      <p className="Text2">{truncate(card.description, {length: 80})}</p>
    </div>
  );
};

export default PropertyCard;