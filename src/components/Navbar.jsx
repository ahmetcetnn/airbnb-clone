import React from "react";
import airbnblogo from "../components/img/airbnblogo.png";

function Navbar() {
  return (
    <nav>
      <img src={airbnblogo} alt="logom" className="navlogo" />
    </nav>
  );
}

export default Navbar;
