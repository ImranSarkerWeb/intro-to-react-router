import React from "react";
import "./Header.css";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="contact">Contact Us</a>
        <a href="logi">Login</a>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
