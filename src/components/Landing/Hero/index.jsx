import React from "react";
import Header from "../Header";
import ArrowSVG from "../../../assets/svg/Arrow.png";
import "@fontsource/rubik/500.css";

function Hero() {
  return (
    
      <section className="hero-section font-rubik">
        <Header />
        <h1 className="hero-heading">
          <span className="blurred-text">Science Track</span>- место для <br />
          научных познаний
        </h1>
      </section>
     
  );
}

export default Hero;
