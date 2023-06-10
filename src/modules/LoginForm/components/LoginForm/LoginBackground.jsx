import React from "react";
import bg from "../../../../assets/images/bg.jpg";
import MainPhoto from "../../../../assets/images/MainPhoto.png";

const LoginBackground = () => {
  return (
    <div
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={MainPhoto}
        alt=""
        className="w-[100%] lg:translate-x-[50%] drop-shadow-imgShadow"
      /> {/* block */}
    </div>
  );
};

export default LoginBackground;
