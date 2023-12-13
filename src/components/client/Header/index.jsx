import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../components/client/Header/style.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="web-pages">
      <div className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-left">
              <div className="header-title">
                <h1>Shortly</h1>
              </div>
              <div className="header-link">
                <NavLink
                  to="features"
                  onClick={(isActive) => (isActive ? ".active" : "")}
                >
                  Features
                </NavLink>
                <NavLink
                  to="pricing"
                  onClick={(isActive) => (isActive ? ".active" : "")}
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="resources"
                  onClick={(isActive) => (isActive ? ".active" : "")}
                >
                  Resources
                </NavLink>
              </div>
            </div>
            <div className="header-right">
              <p className="login">Login</p>
              <button className="header-signUp-btn">Sign Up</button>
              <MenuIcon className="menu-icon" onClick={showDrawer} />
              <Drawer placement="right" onClose={onClose} open={open}>
                <div className="drawer-links">
                  <NavLink to="features">Features</NavLink>
                  <NavLink to="pricing">Pricing</NavLink>
                  <NavLink to="resources">Resources</NavLink>
                </div>
                <div className="drawer-contact">
                  <p>Login</p>
                  <button>Sign Up</button>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
