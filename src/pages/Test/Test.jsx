import React, { useState } from "react";
import "./Test.scss";
import image from "../../assets/images/MainPhoto.png";
import ProgressCircle from "../../components/EventContainer/ProgressCircle";

function Test() {
  const [testProgress, setTestProgress] = useState(0);
  return (
    <div className="test">
      <input
        style={{ border: "1px solid black" }}
        type="number"
        name=""
        id=""
        onClick={(e) => setTestProgress(e.target.value)}
      />
      <ProgressCircle roundNumber={34} progress={testProgress} />
    </div>
  );
}

export default Test;
