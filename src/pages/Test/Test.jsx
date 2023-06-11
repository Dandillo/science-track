import React, { useState } from 'react'
import './Test.scss';
import image from '../../assets/images/MainPhoto.png'

function Test() {
  return (
    <div className='test'>
      <div className="cover">
        <img src={image} alt="" />
      </div>
      <div className="text"></div>
    </div>
  )
}

export default Test;