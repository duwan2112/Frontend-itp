import React, {useState, useEffect} from "react";
import logoDark from "../../img/logo-light.png";
import logoLight from "../../img/logo-dark.png";
import {Link} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import {ContainerNavStyled} from "./LayoutStyled";

export default function Header() {
  const [navActive, setNavActive] = useState(0);
  const [navScroll, setNavScroll] = useState(false);
  const [navButton, setNavButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 550 && window.innerWidth > 1140) {
        return setNavScroll(true);
      } else if (window.scrollY > 500 && window.innerWidth > 940) {
        return setNavScroll(true);
      } else if (window.scrollY > 900 && window.innerWidth > 720) {
        return setNavScroll(true);
      } else if (window.scrollY > 750) {
        return setNavScroll(true);
      } else return setNavScroll(false);
    });
  }, []);

  const handleNav = (value) => {
    setNavActive(value);
    setNavButton(true);
  };

  const handleClose = () => {
    setNavButton(false);
  };

  const handleOpen = () => {
    setNavButton(true);
  };

  return (
    <ContainerNavStyled open={navButton} scroll={navScroll}>
      <div className="background-menu   d-block d-lg-none">
        <button onClick={handleClose} className=" close">
          {" "}
        </button>
      </div>

      <div
        className={`container-logo-mobile ${
          navButton && "container-open"
        } d-block d-lg-none`}
      >
        <button onClick={handleOpen} class="navbar-toggler" type="button">
          <MenuIcon style={{fontSize: "3rem"}} />
        </button>
        {navScroll ? (
          <img className="logo" src={logoLight} alt="" />
        ) : (
          <img className="logo" src={logoDark} alt="" />
        )}
      </div>
      <div className="container-logo d-none d-lg-block ">
        {navScroll ? (
          <img className="logo" src={logoLight} alt="" />
        ) : (
          <img className="logo" src={logoDark} alt="" />
        )}
      </div>
      <nav className="nav nav-navbar mr-auto">
        <a
          onClick={() => {
            handleNav(0);
          }}
          className={`nav-link ${navActive === 0 && "active"}`}
          href="#"
        >
          Home
        </a>
        <a
          onClick={() => {
            handleNav(1);
          }}
          className={`nav-link ${navActive === 1 && "active"}`}
          href="#"
        >
          Features
        </a>
        <a
          onClick={() => {
            handleNav(2);
          }}
          className={`nav-link ${navActive === 2 && "active"}`}
          href="#"
        >
          Pricing
        </a>
        <a
          onClick={() => {
            handleNav(3);
          }}
          className={`nav-link ${navActive === 3 && "active"}`}
          href="#"
        >
          Resources{" "}
        </a>
        <a
          onClick={() => {
            handleNav(4);
          }}
          className={`nav-link ${navActive === 4 && "active"}`}
          href="#"
        >
          Contact
        </a>
      </nav>
      <div className="container-seccion">
        {navScroll && (
          <>
            <Link className="button" to="/login">
              {" "}
              Sign Up{" "}
            </Link>
            <Link className="button btn-white" to="/register">
              {" "}
              Register{" "}
            </Link>{" "}
          </>
        )}
      </div>
    </ContainerNavStyled>
  );
}
