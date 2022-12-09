import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo.webp";
import LogoMirror from "../Logo/Logo-mirror.webp";

function Header() {
  return (
    <div className="header-div">
      <img className="jft-logo" alt="jumper funtime logo" src={Logo}></img>
      <h1>Jumper Funtime!</h1>
      <img
        className="jft-logo"
        alt="jumper funtime logo"
        src={LogoMirror}
      ></img>
    </div>
  );
}

export default Header;
