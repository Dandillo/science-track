import React, { useEffect, useState } from "react";
import Input from "../../../../ui/Input";
import Button from "../../../../ui/Button";
import { HiArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setName, setRole, setOffName, setId } from "../../store/UserStore";
import AuthServices from "../../services/AuthServices";

const LoginForm = () => {
  const navigate = useNavigate(null);
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('check');
    AuthServices.login(login, pass)
      .then((response) => {
        dispatch(setName(response.data.userName));
        dispatch(setOffName(response.data.officialName));
        dispatch(setRole(response.data.role));
        dispatch(setId(response.data.userId));
        window.location.replace("/waiting");
      })
      .catch(() => {
        console.log("error");
      });
  };

  useEffect(() => {
    // AuthServices.logout()
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err.data);
    //   });
  }, []);

  return (
    <div
      className="bg-white text-grayColor flex flex-col items-center gap-4
     w-full px-[100px] justify-center h-full pt-[40px]">
      <div className="flex flex-col gap-12 items-center"> {/* app-descr */}
        <h1 className="text-6xl font-semibold">SCIENCE TRACK</h1>
        <p className="text-3xl text-center">
          Выбирайте карточки и развивайте свой персональный профиль в
          социологической игре!
        </p>
      </div>
      <p className="form-heading text-5xl ">Авторизация</p>
      <form
        onSubmit={handleLogin}
        className=" flex flex-col gap-[40px] w-[80%]"
      >
        <div className="input-container  ">
          <p className="inputLabel text-3xl">
            Твой логин<span className="text-redColor">*</span>:
          </p>
          <Input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            id="login"
            className=" h-[65px] w-full mt-[13px] text-2xl"
            type="text"
            placeholder="Введи свой логин..."
          />
        </div>
        <div className="input-container w-full">
          <p className="inputLabel text-3xl ">
            Твой пароль<span className="text-redColor">*</span>:
          </p>
          <Input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            id="password"
            className=" h-[65px] mt-[13px] w-full text-2xl"
            type="password"
            placeholder="Введи свой пароль..."
          />
        </div>
        <Button
          type="submit"
          className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600	
          h-[65px] text-white font-400 text-3xl	uppercase hover:bg-orangeColor hover:bg-none transition-bg ease-in"
        >
          Войти
          <HiArrowLongRight className="inline" />
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;