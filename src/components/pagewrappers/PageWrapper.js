import { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import { createUseStyles } from "react-jss";
import logo from "../../assets/apetito.png";
import { colors } from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import DropdownNav from "./DropdownNav";

export default function PageWrapper(props) {
  const navigate = useNavigate();
  const { auth, logOutAuth } = useAuth();
  const [navStyle, setNavStyle] = useState({});
  const [navButtonStyle, setNavButtonStyle] = useState({});
  const [logoStyle, setLogoStyle] = useState({});

  const [loginRegisterAccess, setLoginRegisterAccess] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const rootStyle = document.querySelector(":root");
  const cssVariables = getComputedStyle(rootStyle);
  const classes = useStyles();

  useEffect(() => {
    setNavStyle(styleNavBarTransparent);
    setNavButtonStyle(styleButtonsTransparent);
    setLogoStyle(styleLogoTransparent);

    // Agregar un event listener para manejar cambios en el tamaño de la ventana
    window.addEventListener("resize", listenToScroll);
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
      window.removeEventListener("resize", listenToScroll);
    };
  }, []);

  const listenToScroll = () => {
    if (window.innerWidth > 800) {
      if (window.pageYOffset <= 50) {
        setNavStyle(styleNavBarTransparent);
        setNavButtonStyle(styleButtonsTransparent);
        setLogoStyle(styleLogoTransparent);
      } else {
        setNavStyle(styleNavBarSolid);
        setNavButtonStyle(styleButtonsSolid);
        setLogoStyle(styleLogoSolid);
      }
    } else {
      setNavStyle(styleNavBarTransparent);
      setNavButtonStyle(styleButtonsTransparent);
      setLogoStyle(styleLogoTransparent);
    }

    if (window.pageYOffset > 950) {
      setShowScrollButton(true);
    } else setShowScrollButton(false);
  };

  const handleMouseOver = () => {
    //setNavStyle(styleNavBarSolid);
  };

  const styleNavBarTransparent = {
    backgroundColor: colors.transparent,
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

  const styleLogoTransparent = {
    width: "100%",
    height: "100%",
  };

  const styleLogoSolid = {
    width: "90%",
    height: "90%",
  };

  return (
    <div className={classes.container}>
      <div className={classes.background}></div>
      <div
        style={navStyle}
        className={classes.section}
        onMouseOver={handleMouseOver}
      >
        <button
          style={{
            display: showScrollButton ? "block" : "none",
          }}
          className={classes.scrollButton}
          onClick={() => {
            window.scrollTo(0, 750);
          }}
        >
          ▲
        </button>
        <nav className={classes.navBar}>
          <div className={classes.navBarList}>
            <div
              className={classes.navBarListItem}
              style={navButtonStyle}
              onClick={() => {
                navigate("/");
              }}
            >
              <p>HOME</p>
            </div>
            <div className={classes.navBarListItem} style={navButtonStyle}>
              <p>ORDER</p>
            </div>
            <div className={classes.enterpriseListItem}>
              <div className={classes.enterpriseContainer}>
                <img
                  className={classes.logo}
                  style={logoStyle}
                  src={logo}
                  onClick={() => navigate("/")}
                ></img>
              </div>
            </div>
            <div
              className={classes.navBarListItem}
              style={navButtonStyle}
              onClick={() => {
                navigate("/contact");
              }}
            >
              <p>CONTACT</p>
            </div>

            <DropdownNav />

            <div
              style={navButtonStyle}
              className={classes.navBarListItem}
              onClick={() => {
                navigate("/login");
              }}
            >
              <p>GALLERY</p>
            </div>
          </div>
        </nav>
      </div>
      {props.children}
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "100%",
  },
  background: {
    backgroundColor: "white",
    position: "fixed",
    zIndex: -1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
  },
  section: {
    width: "100%",
    height: "5rem",
    display: "flex",
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
    top: "0",
    transition: "background 0.5s, height 0.5s, border 0.5s",

    "@media screen and (max-width: 800px)": {
      position: "absolute",
    },
  },
  navBar: {
    width: "60%",
    height: "80%",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "5rem",

    "@media screen and (max-width: 800px)": {
      width: "90%",
    },
  },
  navBarList: {
    width: "100%",
    height: "90%",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",

    "@media screen and (max-width: 800px)": {
      justifyContent: "space-around",
    },
  },
  navBarListItem: {
    width: "20rem",
    height: "70%",
    display: "flex",
    fontSize: "1rem",
    fontWeight: "600",
    marginTop: "auto",
    marginBottom: "auto",
    justifyContent: "center",
    color: "white",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: colors.transparent,
    borderBottom: `1px solid ${colors.transparent}`,

    transition: "border 0.2s ease-in-out",

    "@media screen and (max-width: 800px)": {
      display: "none",
    },
  },
  enterpriseListItem: {
    width: "25rem",
    height: "90%",
    display: "flex",
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "1.5rem",
    justifyContent: "center",
    color: "white",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: colors.transparent,
    borderBottom: `1px solid ${colors.transparent}`,

    transition: "border 0.2s ease-in-out",

    "@media screen and (max-width: 800px)": {
      width: "10rem",
    },
  },
  enterpriseContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "6rem",
    height: "6rem",
    marginTop: "auto",
    marginBottom: "auto",

    "@media screen and (max-width: 800px)": {
      width: "6.5rem",
      height: "6.5rem",
    },

    "@media screen and (max-width: 500px)": {
      width: "5.5rem",
      height: "5.5rem",
    },
  },
  logo: {
    borderRadius: "100%",
    width: "100%",
    height: "100%",
    transition: "width 0.5s, height 0.5s, box-shadow 0.3s",
    "&:hover": {
      boxShadow: "white 0 0 8px",
    },
  },
  scrollButton: {
    position: "fixed",
    bottom: "100px",
    width: "3rem",
    height: "3rem",
    color: colors.nav,
    backgroundColor: colors.textNav,
    right: "20px",
    borderRadius: "100%",
    border: "solid 1px " + colors.navLight,
    transition: "background 0.3s, border 0.3s, color 0.3s",

    "&:hover": {
      backgroundColor: colors.nav,
      border: `solid 1px ${colors.navLight}`,
      color: colors.textNav,
    },
  },
});
