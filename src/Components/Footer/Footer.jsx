import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="socials">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>
        <div className="Logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blurf1"></div>
      <div className="blur blurf2"></div>
    </div>
  );
}

export default Footer;
