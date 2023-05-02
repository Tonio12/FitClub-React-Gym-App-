import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobileWidth = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="Logo" />
      {mobileWidth && menuOpened === false ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px ",
            marginLeft: "auto",
          }}
          onClick={() => {
            setMenuOpened(true);
          }}
        >
          <img
            src={Bars}
            alt=""
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              spy={true}
              smooth={true}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reason"
              spy={true}
              smooth={true}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              spy={true}
              smooth={true}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
