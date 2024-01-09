import { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DropdownNav from "./DropdownNav";
import { createUseStyles } from "react-jss";
import logo from "../../assets/apetito.png";
import { colors } from "../../assets/colors";
import { useNavigate } from "react-router-dom";

export default function NavMinimal() {
  const navigate = useNavigate();
  const { auth, logOutAuth } = useAuth();

  const [loginRegisterAccess, setLoginRegisterAccess] = useState([]);

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <nav className={classes.navBar}>
        <div className={classes.navBarList}>
          <div className={classes.enterpriseListItem}>
            <div className={classes.enterpriseContainer}>
              <img
                className={classes.logo}
                src={logo}
                onClick={() => navigate("/")}
              ></img>
            </div>
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
    backgroundColor: colors.transparent,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
    marginTop: "0.5rem",
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
    width: "10rem",
    height: "70%",
    display: "flex",
    fontSize: "1rem",
    fontFamily: "Poppins",
    fontWeight: "600",
    marginTop: "auto",
    marginBottom: "auto",
    justifyContent: "center",
    color: "white",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: colors.transparent,

    "@media screen and (max-width: 800px)": {
      display: "none",
    },
  },
  navBarListItemTextContainer: {
    height: "110%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: `1px solid ${colors.transparent}`,
    transition: "border 0.2s ease-in-out",

    "&:hover": {
      borderColor: colors.textNav,
    },
  },
  navBarListItemText: {
    textAlign: "center",
  },
  enterpriseListItem: {
    maxWidth: "25rem",
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
});
