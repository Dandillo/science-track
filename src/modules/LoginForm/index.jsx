import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import LoginBackground from "./components/LoginForm/LoginBackground";
export default function LoginFormIndex() {
  return (
    <div className="w-full h-full flex "> {/* grid lg:grid-cols-login h-full md:grid-cols-1 */}
      <LoginBackground />
      <LoginForm />
    </div>
  );
}