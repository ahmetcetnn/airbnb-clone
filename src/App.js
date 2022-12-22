import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katie from "./components/img/katie.png";
import bike from "./components/img/bike.png";
import forest from "./components/img/forest.png";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
        {" "}
        <Card
          img={katie}
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img={bike}
          rating="4.0"
          reviewCount={3}
          country="France"
          title="Bicyle tour on mountains"
          price={108}
        />
        <Card
          img={forest}
          rating="4.7"
          reviewCount={6}
          country="Japan"
          title="Forest walking in autumn"
          price={87}
        />
      </section>
    </div>
  );
}

export default App;
