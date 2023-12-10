import { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { createUseStyles } from "react-jss";
import logo from "../../assets/apetito.png";
import { colors } from "../../assets/colors";
import { useNavigate } from "react-router-dom";
import DropdownNav from "./DropdownNav";

export default function PageWrapper(props) {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  const listenToScroll = () => {
    if (window.pageYOffset > 950) {
      setShowScrollButton(true);
    } else setShowScrollButton(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.background}></div>
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
  scrollButton: {
    position: "fixed",
    bottom: "100px",
    width: "3rem",
    height: "3rem",
    color: colors.nav,
    backgroundColor: colors.textNav,
    right: "20px",
    borderRadius: "100%",
    zIndex: 150,
    border: "solid 1px " + colors.navLight,
    transition: "background 0.3s, border 0.3s, color 0.3s",

    "&:hover": {
      backgroundColor: colors.nav,
      border: `solid 1px ${colors.navLight}`,
      color: colors.textNav,
    },
  },
});
