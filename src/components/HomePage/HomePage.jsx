import React, { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import TariffsPage from "../TariffsPage/TariffsPage";
import s from "./HomePage.module.css";

export const HomePage = () => {
    
    return (
        <div className={s.homePage}>
            <NavBar />
            <TariffsPage />
        </div>
    );
}