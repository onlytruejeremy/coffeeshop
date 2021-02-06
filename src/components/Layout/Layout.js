import React from "react";
import NavBar from "../Nav/NavBar";
import "./Layout.css";
const Layout = (props) => {
  return (
    <div className="layout__container">
      <NavBar />
      <div className="layout__inner">{props.children}</div>
    </div>
  );
};

export default Layout;
