import React from "react";
import Header from "../Header";
import ArrowSVG from "../../../assets/svg/Arrow.png";
import "@fontsource/rubik/500.css";

function Preview() {
  return (
      <section className="preview-section font-rubik" id="about">
        <h2 className="preview-heading section-heading">
          Играй онлайн со своими друзьями, преподавателями и узнавайте <br/>{" "}
          вместе новое!
        </h2>

        <button className="rounded-button">
          НАЧАТЬ ИГРАТЬ <img className="arrow-img" src={ArrowSVG} alt=""/>
        </button>
      </section>
  );
}

export default Preview;
