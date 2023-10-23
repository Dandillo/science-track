import React from "react";
import LoginFormModule from "../../modules/LoginForm";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export default function LoginPage() {
  useAuthRedirect();
  return <LoginFormModule />;
}
