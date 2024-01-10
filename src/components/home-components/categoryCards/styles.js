import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";

const useStyles = createUseStyles({
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundSize: "cover",
    borderRadius: "20px",
    boxShadow: `0 0 10px ${colors.black}`,

    opacity: 0,

    "&:hover": {},

    "@media screen and (max-width: 1100px)": {
      opacity: 1,
    },
  },
  innerLeftContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "@media screen and (max-width: 1100px)": {
      justifyContent: "center",
    },
  },
  innerRightContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "@media screen and (max-width: 1100px)": {
      justifyContent: "center",
    },
  },
  imageContainer: {
    width: "54.5%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "100",

    "@media screen and (max-width: 1100px)": {
      display: "none",
    },
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition:
      "transform 0.5s, border 0.5s ease-in-out, border-radius 0.5s, box-shadow 0.8s",
    zIndex: "101",
    borderRadius: "20px",
    //border:`solid 2px ${colors.navSemiTransparent}`,

    "&:hover": {
      transform: "scale(1.01g)",
      border: "none",
      //border:`solid 1px ${colors.blackLight}`,
      boxShadow: `0 0 15px ${colors.blackLight}`,
    },

    "@media screen and (max-width: 1100px)": {
      display: "none",
    },
  },
  buttonsContainer: {
    width: "90%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.1rem",
  },
  menuButton: {
    width: "6rem",
    height: "3rem",
    borderRadius: "20px 4px 4px 20px",
    backgroundColor: colors.nav,
    color: colors.textNav,
    transition: "background 0.5s ease-in-out, color 0.5s",

    "&:hover": {
      backgroundColor: colors.navLight,
      color: colors.textNav,
    },
  },
  addButton: {
    width: "2.5rem",
    height: "3rem",
    borderRadius: "4px 20px 20px 4px",
    fontWeight: "600",
    backgroundColor: colors.nav,
    color: colors.textNav,
    transition: "background 0.5s ease-in-out, color 0.5s",

    "&:hover": {
      backgroundColor: colors.navLight,
      color: colors.textNav,
    },
  },
});

export default useStyles;
