<<<<<<< Updated upstream
import React, { useState } from "react";
import "./Test.scss";
import image from "../../assets/images/MainPhoto.png";
import ProgressCircle from "../../components/EventContainer/ProgressCircle";
=======
import React, { useState } from 'react'
import './Test.scss';
>>>>>>> Stashed changes

function Test() {
  const [testProgress, setTestProgress] = useState(0);
  return (
<<<<<<< Updated upstream
    <div className="test">
      <input
        style={{ border: "1px solid black" }}
        type="number"
        name=""
        id=""
        onClick={(e) => setTestProgress(e.target.value)}
      />
      <ProgressCircle roundNumber={34} progress={testProgress} />
=======
    <div className='test z-0 flex items-center justify-center w-screen h-screen bg-white' >
      {/* <div className='test__child w-[600px] h-[600px] flex items-center justify-center'>
        <div className='w-[200px] h-[200px] bg-red-600 z-20'/>
      </div> */}
      <svg
        xmlnsXlink='http://www.w3.org/1999/xlink'
        width='300' height='300'>

        <filter id='n' x='0' y='0'>
                <feTurbulence
                  type='fractalNoise'
                  baseFrequency='0.75'
                  stitchTiles='stitch'/>
        </filter>

        <rect width='300' height='300' fill='#fff'/>
        <rect width='300' height='300' filter="url(#n)" opacity='0.60'/>
      </svg>
>>>>>>> Stashed changes
    </div>
  );
}

export default Test;
