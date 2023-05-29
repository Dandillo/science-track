import React from "react";
import Input from "../../../../ui/Input";
import Button from "../../../../ui/Button";
import { HiArrowLongRight } from "react-icons/hi2";
const LoginForm = () => {
  return (
    <div className="bg-white  text-grayColor flex flex-col  items-center gap-[64px] pt-[40px] px-[30px] w-[60%] justify-self-end h-full flex-wrap mr-[4rem]">
      <div className="app-descr flex flex-col gap-4 items-center">
        <h1 className="text-6xl ">SCIENCE TRACK</h1>
        <p className="text-3xl text-center">
          Выбирайте карточки и развивайте свой персональный профиль в
          социологической игре!
        </p>
      </div>
      <p className="form-heading text-6xl ">Авторизация</p>
      <form className=" flex flex-col gap-[50px] w-full ">
        <div className="input-container  ">
          <p className="inputLabel text-3xl">
            Твой логин<span className="text-redColor">*</span>:
          </p>
          <Input
            id="login"
            className=" h-[69px] w-full mt-[13px] text-2xl"
            type="text"
            placeholder="Введи свой логин..."
          />
        </div>{" "}
        <div className="input-container w-full">
          <p className="inputLabel text-3xl ">
            Твой пароль<span className="text-redColor">*</span>:
          </p>
          <Input
            id="password"
            className=" h-[69px] w-full mt-[13px] text-2xl"
            type="password"
            placeholder="Введи свой пароль..."
          />
        </div>
        <Button
          type="submit"
          className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600	 h-[69px] text-white font-400 text-2xl	uppercase hover:bg-orangeColor hover:bg-none transition-bg ease-in     "
        >
          Войти <HiArrowLongRight className="inline" />
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
