import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";
import { color } from "framer-motion";

const useStyles = createUseStyles({
  container: {
    width: "90%",
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5rem",
    backgroundSize: "cover",
    "@media screen and (max-width: 500px)": {
      marginBottom: "0rem",
      width: "100%",
      borderBottom: `solid 1px ${colors.nav}`,
      height: "50vh",
    },
  },
  innerLeftContainer: {
    width: "100%",
    height: "85%",
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
    justifyContent: "center",
    gap: "4rem",
  },
  innerRightContainer: {
    width: "100%",
    height: "85%",
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
    justifyContent: "center",
    gap: "2rem",
  },
  dataContainer: {
    display: "flex",
    width: "45%",
    height: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    fontSize: "1.1rem",
    backgroundColor: colors.navSemiTransparent,
    color: colors.textNav,
    textShadow: "0 0 10px black",

    "@media screen and (max-width: 1100px)": {
      width: "90%",
    },

    "@media screen and (max-width: 500px)": {
      width: "100%",
    },
  },
  imageContainer: {
    width: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "@media screen and (max-width: 1100px)": {
      display: "none",
    },
  },
  imageStyle: {
    width: "27rem",
    height: "25rem",
    borderRadius: "100%",
    border: `solid 5px ${colors.nav}`,
    objectFit: "cover",
    transition: "width 0.5s, height 0.5s, border 0.5s, box-shadow 0.5s",

    "&:hover": {
      width: "29rem",
      height: "27rem",
      boxShadow: "0 0 50px black",
      borderWidth: "2px",
    },

    "@media screen and (max-width: 1100px)": {
      display: "none",
    },
  },
  buttonsContainer: {
    width: "60%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
  button: {
    width: "40%",
    height: "100%",
    borderRadius: "20px",
    backgroundColor: colors.nav,
    color: colors.textNav,
    transition: "background 0.5s ease-in-out, color 0.5s",

    "&:hover": {
      backgroundColor: colors.navLight,
      color: colors.black,
    },
  },
});

export default useStyles;
