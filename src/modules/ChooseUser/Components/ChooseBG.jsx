import React from 'react'
import bg from '../../../assets/images/BG/Choose.png';


function ChooseBG({children}) {
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

export default ChooseBG