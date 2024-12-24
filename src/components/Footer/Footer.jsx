import React from "react";
import logoAppleStore from '../../assets/appleStore.svg';
import logoGooglePlay from '../../assets/googlePlay.svg';
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.info}>
        <p>© 2001–2022 ООО <span>«СпейсВэб»</span></p>
        <p>Все права защищены.</p>
        <p>Лицензия <span>№163230</span></p>
      </div>
      <div className={s.download}>
        <p>Скачать приложение</p>
        <div className={s.link_img}>
          <img src={logoGooglePlay} alt={"googlePlay"} />
          <img src={logoAppleStore} alt={"appleStore"} />
        </div>
      </div>
      <div className={s.telephone}>
        <a href={"tel: +78123341222"}>+7 (812) 334-12-22 <span>(в Санкт-Петербурге)</span></a>
        <a href={"tel: +74956631612"}>+7 (495) 663-16-12 <span>(в Москве)</span></a>
        <a href={"tel: +78001001615"}>+7 (800) 100-16-15 <span>(бесплатно по России)</span></a>
      </div>
    </footer>
  );
};
