import React, { useState } from "react";
import classNames from "classnames";
import logo_spaceWeb from "../../assets/img/logo_spaceWeb.png";
import menu_icon from "../../assets/img/menu_icon.svg";
import NavBarItems from "./NavBarItems";
import HeaderTools from "../Header/Header";
import nav_bar_content from "./nav_bar.content.json";
import "./NavBar.scss";

export const NavBar = ({ children }) => {
  const [fullNav, setFullNav] = useState(false);

  const contentNav = nav_bar_content.map((elem, index) => <NavBarItems key={index} content={elem} />)

  return (
    <div className={"nav_wrapper"}>
      <div className={classNames("navbar", { "navbar": fullNav, "navbar_small": !fullNav })}>
        <div className={"navbar_header"}>
          <img
            className={"logo_spaceWeb"}
            src={logo_spaceWeb}
            alt={"logo_spaceWeb"}
          />
          <img
            className={"nav_menu"}
            src={menu_icon}
            alt={"menu"}
            onClick={() => setFullNav((status) => !status)}
          />
        </div>
        <div className={"navbar_links"}>
          {contentNav}
        </div>
      </div>
      <div className={"general_content"}>
        <HeaderTools fullNav={fullNav} setFullNav={setFullNav} />
        {children}
      </div>
    </div>
  );
}
