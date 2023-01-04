import React from "react";
import airbnbhero from "../components/img/airbnbhero.png";

function Hero() {
  return (
    <section className="hero">
      <img src={airbnbhero} alt="homepage" className="heroimage" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home...
      </p>
    </section>
  );
}

export default Hero;
