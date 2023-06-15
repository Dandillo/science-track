import React from 'react'
import logo from "../../assets/images/Logo.png";

function WhiteForm({children, title, body}) {
    return (
        <div
        style={{
          borderRadius: `25px`,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
        className="w-[620px] h-auto -translate-y-6 py-16 px-16 ml-auto mr-32 flex flex-col"
      >
        <div className="flex justify-start items-center">
          <img src={logo} alt="logo" className="h-[130px] w-auto" />
          <p className="text-orangeColor font-semibold ml-4 text-4xl">
            SCIENCE TRACK
          </p>
        </div>
        <div
          className="my-12 w-[180px] h-2 bg-orangeColor rounded-full"
        />
        <h1 className="font-semibold text-7xl text-[#4B4B4B] mb-12">
          {title}
        </h1>
          <div>
            <p className="text-4xl text-[#4B4B4B]">
              {body}
            </p>
          </div>
          {children}
      </div>
    )
}

export default WhiteForm