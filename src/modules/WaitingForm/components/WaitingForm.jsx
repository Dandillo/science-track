import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './WaitingForm.scss';
import WaitingFormAdmin from "./admin/WaitingFormAdmin";
import WaitingFormUser from "./user/WaitingFormUser";

function WaitingForm() {
    const role = useSelector((state) => state.user.role);

    return (
        <>
            {role === "admin" ? (
                <WaitingFormAdmin/>
            ) : (
                <WaitingFormUser/>
            )}
        </>
    );
}

export default WaitingForm;
