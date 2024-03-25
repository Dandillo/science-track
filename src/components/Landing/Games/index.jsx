import React from "react";
import Header from "../Header";
import newLinkIco from "../../../assets/svg/newLink.svg";
import gameLogoIco from "../../../assets/svg/gameLogo.svg";
import "@fontsource/rubik/500.css";

function Games() {
  return (
      <section className="games-section font-rubik" id="games">
        <h2 className="games-heading">Попробуйте наши другие игры</h2>

        <div className="games-container">
          <div className="games-item">
            <div className="title-container">
              <img src={gameLogoIco} alt="" className="game-logo"/>
              <h3 className="game-title">Название игры №1</h3>
              <a href="#">
                <img src={newLinkIco} alt="" className="link-icon"/>
              </a>
            </div>
            <p className="game-caption">
              Краткое описание игры о чём она и зачем нужна
            </p>
          </div>
          <div className="games-item">
            <div className="title-container">
              <img src={gameLogoIco} alt="" className="game-logo"/>
              <h3 className="game-title">Название игры №2</h3>
              <a href="#">
                <img src={newLinkIco} alt="" className="link-icon"/>
              </a>
            </div>
            <p className="game-caption">
              Краткое описание игры о чём она и зачем нужна
            </p>
          </div>
          <div className="games-item">
            <div className="title-container">
              <img src={gameLogoIco} alt="" className="game-logo"/>
              <h3 className="game-title">Название игры №3</h3>
              <a href="#">
                <img src={newLinkIco} alt="" className="link-icon"/>
              </a>
            </div>
            <p className="game-caption">
              Краткое описание игры о чём она и зачем нужна
            </p>
          </div>
        </div>
      </section>
  );
}

export default Games;
