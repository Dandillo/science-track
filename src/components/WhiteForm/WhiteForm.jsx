import React from 'react'
import logo from "../../assets/images/Logo.png";
import '../Adaptive.scss';

function WhiteForm({children, title, body}) {
    return (
        <div
        style={{
          borderRadius: `25px`,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
        className="w-[670px] h-auto -translate-y-6 py-16 px-16 ml-auto mr-32 flex flex-col white-form"
      >
        <div className="flex justify-start items-center">
          <img src={logo} alt="logo" className="h-[130px] w-auto white-form__logo-img" />
          <p className="text-orangeColor font-semibold ml-4 text-4xl white-form__logo-text">
            SCIENCE TRACK
          </p>
        </div>
        <div
          className="my-12 w-[180px] h-2 bg-orangeColor rounded-full white-form__delimiter"
        />
        <h1 className="font-semibold text-7xl text-[#4B4B4B] mb-12 white-form__title">
          {title}
        </h1>
            <p className="text-4xl text-[#4B4B4B] white-form__description-text">
              {body}
            </p>
          {children}
      </div>
    )
}

export default WhiteForm