import React from "react";
import bg from "../../../../assets/images/bg.jpg";
import MainPhoto from "../../../../assets/images/MainPhoto.png";
import './LoginBackground.scss'

const LoginBackground = () => {
  return (
    <div className="loginBg">
      <img
        src={MainPhoto}
        alt=""
      /> {/* block */}
    </div>
  );
};

export default LoginBackground;
