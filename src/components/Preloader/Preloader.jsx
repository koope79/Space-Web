import React from 'react';
import preloader_icon from "../../assets/img/preloader.gif";
import s from "./Preloader.module.css";

const Preloader = () => {
  return <div className={s.preloader}>
    <img src={preloader_icon} alt="-" />
  </div>
};

export default Preloader;
