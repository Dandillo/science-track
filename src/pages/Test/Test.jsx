import React, { useRef, useState } from "react";
import "./Test.scss";
import ProgressCircle from "../../components/EventContainer/ProgressCircle";
import EventContainer from "../../components/EventContainer/EventContainer";
function Test() {
  const [check, setCheck] = useState(
    'Давно выяснено, что при оценке варианты).'
  );
  return (
    <div className="test bg-blue-950">
      <input
        style={{ border: "1px solid black" }}
        type="number"
        name=""
        id=""
        onChange={(e) => e.preventDefault()}
      />
      <button
        type="button"
        onClick={() => setCheck((prevState) => (prevState += prevState))}
      >
        TEST
      </button>
      <EventContainer
        maxHeight={220}
        title={"Глобальные изменения"}
        info={check}
      />
    </div>
  );
}

export default Test;
