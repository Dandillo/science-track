import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WaitingForm.scss";
import WaitingFormAdmin from "./admin/WaitingFormAdmin";
import WaitingFormUser from "./user/WaitingFormUser";
import { start } from "../../../http/gameHub";
function WaitingForm() {
  const role = useSelector((state) => state.user.role);
  useEffect(() => {
    start();
  }, []);

  return <>{role === "admin" ? <WaitingFormAdmin /> : <WaitingFormUser />}</>;
}

export default WaitingForm;
