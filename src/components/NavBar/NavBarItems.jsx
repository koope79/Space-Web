import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import "./NavBar.scss";

const NavBarItems = ({ content }) => {
  const [addSection, setAddSection] = useState(false);

  const childContent = content.content.map((child, index) => {
    return (
      <div key={index} className={"nav_general_section nav_child"}>
        <img src={`img/${child.img}`} alt={`img-${child.title}`} />
        <p className={"nav_title"}>{child.title}</p>
      </div>
    );
  });

  return (
    <>
      <div onClick={() => setAddSection((status) => !status)}>
        <NavLink
          to={`${content.path}`}
          className={(navData) => navData.isActive ? classNames("nav_general_section", "nav_general_section_active") : "nav_general_section"}
        >
          <img
            src={`img/${content.img}`}
            alt={`img-${content.title}`}
          />
          <p className={"nav_title"}>{content.title}</p>
        </NavLink>
      </div>
      <div className={classNames({ "child_active": addSection, "child_deactive": !addSection })}>
        {childContent}
      </div>
    </>
  );
};

export default NavBarItems;
