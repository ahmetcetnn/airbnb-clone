import React from "react";
import star from "./img/star.png";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="resim" className="card-image" />
      <div className="card-stats">
        <img src={star} alt="star" className="starphoto" />
        <span>{props.rating}</span>
        <span className="gray">{props.reviewCount}</span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price} </span> /person
      </p>
    </div>
  );
}

export default Card;
