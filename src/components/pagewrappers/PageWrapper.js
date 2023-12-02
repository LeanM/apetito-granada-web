import "../../css/pagewrapper.css";
import { Link } from "react-router-dom";
import PageFooter from "./PageFooter";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "../../css/pagewrapper.css";
import { createUseStyles } from "react-jss";
import logo from "../../assets/logo.png";
import { colors } from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import Selection from "./Selection";

export default function PageWrapper(props) {
  const navigate = useNavigate();
  const { auth, logOutAuth } = useAuth();
  const [navStyle, setNavStyle] = useState({});
  const [navButtonStyle, setNavButtonStyle] = useState({});

  const [loginRegisterAccess, setLoginRegisterAccess] = useState([]);
  const [dropdownNav, setDropdownNav] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const rootStyle = document.querySelector(":root");
  const cssVariables = getComputedStyle(rootStyle);

  useEffect(() => {
    setNavStyle(styleNavBarTransparent);
    setNavButtonStyle(styleButtonsTransparent);
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  useEffect(() => {
    verifyLoginRegisterAccess();
  }, [auth]);

  const logout = async () => {
    logOutAuth();
  };

  const createDropdownNav = () => {
    setDropdownNav([
      <MDBDropdown className="page__wrapper__navbar__list__item-account">
        <MDBDropdownToggle tag="a" className="nav-link" role="button">
          <i class="fas fa-user-tag page__wrapper__navbar__list__item-account__icon"></i>
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem className="page__wrapper__navbar__list__item-account__dropdown-item">
            <Link
              className="page__wrapper__navbar__list__item-account__dropdown-link"
              to="/prompts"
            >
              HOME
            </Link>
          </MDBDropdownItem>
          <MDBDropdownItem className="page__wrapper__navbar__list__item-account__dropdown-item">
            <Link
              className="page__wrapper__navbar__list__item-account__dropdown-link"
              to="/checkout"
            >
              MENU
            </Link>
          </MDBDropdownItem>
          <MDBDropdownItem className="page__wrapper__navbar__list__item-account__dropdown-item">
            <Link
              className="page__wrapper__navbar__list__item-account__dropdown-link"
              to="/userorders"
            >
              ORDER
            </Link>
          </MDBDropdownItem>
          <MDBDropdownItem className="page__wrapper__navbar__list__item-account__dropdown-item">
            <Link
              className="page__wrapper__navbar__list__item-account__dropdown-link"
              to="/userorders"
            >
              ABOUT
            </Link>
          </MDBDropdownItem>
          <MDBDropdownItem className="page__wrapper__navbar__list__item-account__dropdown-item">
            <Link
              className="page__wrapper__navbar__list__item-account__dropdown-link"
              to="/userorders"
            >
              CONTACT
            </Link>
          </MDBDropdownItem>
          <MDBDropdownItem className="page__wrapper__navbar__list__item-account__dropdown-item">
            <Link
              className="page__wrapper__navbar__list__item-account__dropdown-link"
              to="/userorders"
            >
              GALLERY
            </Link>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>,
    ]);
  };

  const verifyLoginRegisterAccess = () => {
    if (!auth?.accessToken) {
      setLoginRegisterAccess([
        <div key={1} className="page__wrapper__navbar__list__item-account">
          <Link
            to="/login"
            className="page__wrapper__navbar__list__item__account__link"
          >
            <i class="fas fa-user page__wrapper__navbar__list__item-account__icon"></i>
          </Link>
        </div>,
      ]);
    } else {
      setLoginRegisterAccess([
        <MDBDropdown className="page__wrapper__navbar__list__item-account">
          <MDBDropdownToggle tag="a" className="nav-link" role="button">
            <i class="fas fa-user-tag page__wrapper__navbar__list__item-account__icon"></i>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem className="page__wrapper__navbar__list__item-account__dropdown-item">
              <Link
                className="page__wrapper__navbar__list__item-account__dropdown-link"
                to="/prompts"
              >
                Review
              </Link>
            </MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>,
      ]);
    }
  };

  const listenToScroll = () => {
    if (window.pageYOffset <= 50) {
      setNavStyle(styleNavBarTransparent);
      setNavButtonStyle(styleButtonsTransparent);
    } else {
      setNavStyle(styleNavBarSolid);
      setNavButtonStyle(styleButtonsSolid);
    }

    if (window.pageYOffset > 600) {
      setShowScrollButton(true);
    } else setShowScrollButton(false);
  };

  const handleMouseOver = () => {
    //setNavStyle(styleNavBarSolid);
  };

  const styleNavBarTransparent = {
    backgroundColor: cssVariables.getPropertyValue("--nav-color-transparent"),
    height: "6rem",
  };

  const styleNavBarSolid = {
    backgroundColor: colors.navSemiTransparent,
    color: "black",
    borderBottom: `solid 2px ${colors.nav}`,
  };

  const styleButtonsTransparent = {
    color: "white",
    textShadow: "0 0 5px black",
  };

  const styleButtonsSolid = {
    color: "white",
    textShadow: "0 0 5px black",
  };

  return (
    <div className="page__container">
      <div id="page__background"></div>
      <section
        style={navStyle}
        className="page__wrapper__section"
        id="home__wrapper__section"
        onMouseOver={handleMouseOver}
      >
        <Selection />
        <button
          style={{
            position: "fixed",
            bottom: "100px",
            width: "3rem",
            height: "3rem",
            color: "black",
            backgroundColor: colors.navSemiTransparent,
            right: "20px",
            borderRadius: "100%",
            border: "solid 2px " + colors.nav,
            display: showScrollButton ? "block" : "none",
          }}
          onClick={() => {
            window.scrollTo(0, 450);
          }}
        >
          ▲
        </button>
        <nav className="page__wrapper__navbar">
          <div className="page__wrapper__navbar__container">
            <div className="page__wrapper__navbar__enterpriseName">
              <Link className="nav__brand__link" to="/">
                <img className="nav__brand__img" src={logo}></img>
              </Link>
            </div>
          </div>

          <div className="page__wrapper__navbar__list">
            <div
              className="page__wrapper__navbar__list__category"
              style={navButtonStyle}
              onClick={() => {
                navigate("/");
              }}
            >
              <p>HOME</p>
            </div>
            <div
              className="page__wrapper__navbar__list__category"
              style={navButtonStyle}
            >
              <p>ORDER</p>
            </div>
            <div
              className="page__wrapper__navbar__list__category"
              style={navButtonStyle}
              onClick={() => {
                navigate("/contact");
              }}
            >
              <p>CONTACT</p>
            </div>
            <div
              style={navButtonStyle}
              className="page__wrapper__navbar__list__category"
              onClick={() => {
                navigate("/login");
              }}
            >
              <p>GALLERY</p>
            </div>
            <div className="page__wrapper__navbar__list__item__user-block">
              {/*loginRegisterAccess*/}
            </div>
          </div>
        </nav>
      </section>
      {props.children},<PageFooter></PageFooter>
    </div>
  );
}
