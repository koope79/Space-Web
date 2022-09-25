import React from 'react';
import s from "./Preloader.module.css";
import preloader_icon from "../../assets/img/preloader.gif";


const Preloader = () => {
    return <div className={s.preloader}>
        <img src={preloader_icon} alt="-"/>
    </div>
}

export default Preloader;