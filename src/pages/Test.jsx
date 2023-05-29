import React, { useState } from 'react'
import './Test.scss';

function Test() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='test'>
        <button 
            className={`btnStyles ${isActive ? 'active' : ''}`}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onMouseLeave={() => setIsActive(false)}
        >
            Начать игру
        </button>
    </div>
  )
}

export default Test;
