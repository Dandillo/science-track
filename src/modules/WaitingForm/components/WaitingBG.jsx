import React from 'react'
import bg from '../../../assets/images/BG/Waiting.png';

function WaitingBG({children}) {
  return (
    <div style={{
        backgroundImage: `url('${bg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }}
      className="h-full w-full z-0"
    >
      {children}
    </div>
  )
}

export default WaitingBG