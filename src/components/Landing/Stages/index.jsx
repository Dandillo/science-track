import React from "react";
import Header from "../Header";
import player1PNG from "../../../assets/images/player1.png";
import "@fontsource/rubik/500.css";

function Stages() {
  return (
      <section className="stages-section font-rubik" id="stages">
        <h2 className="stages-heading">Этапы игры</h2>
        <p className="stages-description">
          Этапы игры разделены по уровням, где за каждое <br/> верное решение
          игрок получает игровую валюту, <br/> которая позволяет ему отличиться
          от соперников
        </p>
        <div className="stages-container">
          <div className="stages-list-container">
            <div className="step step-active">
              <div>
                <div className="circle ">1</div>
              </div>
              <div>
                <div className="caption">
                  Первый этап проходит с 20 по 30 уровень. Тогда игрок имеет
                  звание студент имеет статус студента и особо сильно не
                  отличается по ресурсам
                </div>
              </div>
            </div>
            <div className="step ">
              <div>
                <div className="circle">2</div>
              </div>
              <div>
                <div className="caption">
                  Первый этап проходит с 20 по 30 уровень. Тогда игрок имеет
                  звание студент имеет статус студента и особо сильно не
                  отличается по ресурсам
                </div>
              </div>
            </div>
            <div className="step">
              <div>
                <div className="circle">3</div>
              </div>
              <div>
                <div className="caption">
                  Первый этап проходит с 20 по 30 уровень. Тогда игрок имеет
                  звание студент имеет статус студента и особо сильно не
                  отличается по ресурсам
                </div>
              </div>
            </div>
            <div className="step">
              <div>
                <div className="circle">4</div>
              </div>
              <div>
                <div className="caption">
                  Первый этап проходит с 20 по 30 уровень. Тогда игрок имеет
                  звание студент имеет статус студента и особо сильно не
                  отличается по ресурсам
                </div>
              </div>
            </div>
          </div>
          <img src={player1PNG} alt="" className="player-img"/>
        </div>
      </section>
  );
}

export default Stages;
