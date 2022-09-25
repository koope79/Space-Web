import React from "react";
import "../NavBar/NavBar.scss";
import mobile_icon from "../../assets/img/mobile_icon_menu.svg";
import bell_icon from "../../assets/img/bell_icon.svg";
import classNames from "classnames";

export const HeaderTools = ({fullNav, setFullNav}) => {
    return (
        <header>
            <div className={classNames("nav_mobile", {"nav_mobile_active": fullNav})}>
                <img src={mobile_icon} alt="-" onClick={() => setFullNav((status)=> !status)}/>
            </div>
            <div className={"header_content"}>
                <p>3467 ₽</p>
                <div className={"bell"}>
                    <img src={bell_icon} alt="bell"/>
                    username
                </div>
                <p>Выйти</p>
            </div>
        </header>
    );
}
