import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <div className="logo_content">
        <div className="logo">
          <NavLink to="">
            <img src="" alt="" />
            <div className="brand_name">Scorpion</div>
          </NavLink>
        </div>
        <span>menu icon</span>
      </div>
      <div className="nav_list">
        <div className="menu_card">
          <NavLink to="">
            <span className="menu_names">Dashboard</span>
          </NavLink>
          {/* <span className="tooltips">Dashboard</span> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
