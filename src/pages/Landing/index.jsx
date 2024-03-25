import React from "react";
import './index.scss'
import Hero from "../../components/Landing/Hero";
import Preview from "../../components/Landing/Preview";
import Stages from "../../components/Landing/Stages";
import Games from "../../components/Landing/Games";
import Footer from "../../components/Landing/Footer";

export default function Landing() {
    return (
        <div className="Landing">
            <Hero/>
            <Preview/>
            <Stages/>
            <Games/>
            <Footer/>
        </div>
    )
}