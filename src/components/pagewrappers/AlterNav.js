import { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DropdownNav from "./DropdownNav";
import { createUseStyles } from "react-jss";
import logo from "../../assets/apetito.png";
import { colors } from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";

export default function AlterNav(props) {
  const navigate = useNavigate();
  const { auth, logOutAuth } = useAuth();
  const [navStyle, setNavStyle] = useState({});
  const [navButtonStyle, setNavButtonStyle] = useState({});
  const [logoStyle, setLogoStyle] = useState({});
  const [underlineStyle, setUnderlineStyle] = useState({});

  const [loginRegisterAccess, setLoginRegisterAccess] = useState([]);

  const classes = useStyles();

  const handleMouseOver = () => {
    //setNavStyle(styleNavBarSolid);
  };

  return (
    <div
      style={navStyle}
      className={classes.section}
      onMouseOver={handleMouseOver}
    >
      <nav className={classes.navBar}>
        <div className={classes.navBarList}>
          <div
            className={classes.navBarListItem}
            style={navButtonStyle}
            onClick={() => {
              navigate("/");
            }}
          >
            <p className={classes.navBarListItemText}>HOME</p>
            <div className={classes.navBarListItemTextUnderline}></div>
          </div>
          <div className={classes.navBarListItem} style={navButtonStyle}>
            <p className={classes.navBarListItemText}>BOOK</p>
            <div className={classes.navBarListItemTextUnderline}></div>
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
            <p className={classes.navBarListItemText}>CONTACT</p>
            <div className={classes.navBarListItemTextUnderline}></div>
          </div>

          <SideNav />

          <div
            style={navButtonStyle}
            className={classes.navBarListItem}
            onClick={() => {
              navigate("/gallery");
            }}
          >
            <p className={classes.navBarListItemText}>GALLERY</p>
            <div className={classes.navBarListItemTextUnderline}></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "100%",
    fontFamily: "Poppins",
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
    position: "relative",
    justifyContent: "center",
    backgroundColor: colors.transparent,
    //borderBottom: `solid 2px ${colors.nav}`,
    alignItems: "center",
    zIndex: "100",
    marginTop: "0.5rem",
    top: "0",
    transition: "background 0.5s, height 0.5s, border 0.5s",
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
    zIndex: "100",

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
    gap: "1rem",

    "@media screen and (max-width: 800px)": {
      justifyContent: "center",
    },
  },
  navBarListItem: {
    width: "20rem",
    height: "70%",
    display: "flex",
    position: "relative",
    fontSize: "1rem",
    fontWeight: "200",
    marginTop: "auto",
    fontFamily: "Poppins",
    marginBottom: "auto",
    justifyContent: "center",
    borderRadius: "20px 20px 0 0",
    color: colors.nav,
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: colors.transparent,

    "@media screen and (max-width: 950px)": {
      width: "12rem",
    },

    "@media screen and (max-width: 800px)": {
      display: "none",
    },
  },
  navBarListItemTextUnderline: {
    position: "absolute",
    bottom: "-5px",
    width: "50%",
    height: "1px",
    backgroundColor: colors.nav,
  },
  navBarListItemTextContainer: {
    height: "110%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px 20px 0px 0px",
    borderBottom: `1px solid ${colors.nav}`,
    transition: "border 0.2s ease-in-out",

    "&:hover": {
      backgroundColor: colors.navSecondary,
    },
  },
  navBarListItemText: {
    textAlign: "center",
    transition: "color 0.3s",
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
      width: "6rem",
      height: "6rem",
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
});
