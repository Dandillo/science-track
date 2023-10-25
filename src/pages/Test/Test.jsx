import React, { useEffect, useRef, useState } from "react";
import "./Test.scss";
import image from "../../assets/images/MainPhoto.png";
import ProgressCircle from "../../components/EventContainer/ProgressCircle";
import useSound from "use-sound";
import alarm from "./alarm.mp3";
import EventContainer from "../../components/EventContainer/EventContainer";
function Test() {
  const [testProgress, setTestProgress] = useState(90);
  const EventTESTCANTAINER = useRef();
  return (
    <div className="test bg-blue-950">
      <input
        style={{ border: "1px solid black" }}
        type="number"
        name=""
        id=""
        onChange={(e) => {
          console.log(EventTESTCANTAINER.current);
        }}
      />
      <ProgressCircle roundNumber={34} progress={testProgress} />
      <EventContainer
        ref={EventTESTCANTAINER}
        maxHeight={220}
        title={"Глобальные изменения"}
        info={`В вашем научном коллективе преобладала дружеская атмосфера и взаимопонимание 
              между учеными из разных стран. Вы совместно работали над перспективными научными
              проектами, обменивались опытом и знаниями, помогали друг другу в сложных ситуациях,
              строили научные гипотезы и проводили исследования.В этом году ситуация изменилась
              из-за возросшей геополитической напряженности между страной 1 и другими государствами.
              Ученые из этой страны стали отдаляться и прекращать сотрудничество с вашим научным коллективом.
              Ученые из страны 1 перестали приезжать на ваши научные конференции и отказывались от
              совместных научных проектов, а вы не могли отправляться к ним на стажировки.
              Коллеги из других стран тоже испытывали трудности при взаимодействии с учеными из
              страны 1, что привело к замедлению работы над совместными научными проектами и
              сделало невозможным сотрудничество.`}
      />
    </div>
  );
}

export default Test;
