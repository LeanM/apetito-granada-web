import { Button } from "rsuite";
import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";
import { useNavigate } from "react-router-dom";

export default function BookSection() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div className={classes.textContainer}>
          <p className={classes.text}>Te gustan los menus que estas viendo?</p>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            onClick={() => navigate("/contact")}
          >
            BOOK NOW
          </Button>
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "10rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5rem",

    "@media screen and (max-width: 900px)": {
      marginBottom: "3rem",
      marginTop: "3rem",
    },

    "@media screen and (max-width: 500px)": {
      height: "8rem",
    },
  },
  subContainer: {
    display: "flex",
    width: "90%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    borderLeft: `solid 20px ${colors.nav}`,
    borderRight: `solid 20px ${colors.nav}`,
    borderTop: `solid 2px ${colors.nav}`,
    borderBottom: `solid 2px ${colors.nav}`,
    //boxShadow: "black 0 0 10px",
  },
  textContainer: {
    height: "60%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.nav,
    fontSize: "2rem",
    height: "50%",

    "@media screen and (max-width: 900px)": {
      fontSize: "1.7rem",
      marginBottom: "3rem",
      marginTop: "3rem",
    },

    "@media screen and (max-width: 500px)": {
      fontSize: "1.2rem",
      marginBottom: "2rem",
      marginTop: "2rem",
    },
  },
  buttonContainer: {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "10rem",
    backgroundColor: colors.textNav,
    border: `solid 1px ${colors.navLight}`,
    color: colors.nav,
    "&:hover": {
      backgroundColor: colors.nav,
      border: `solid 1px ${colors.navLight}`,
      color: colors.textNav,
    },

    "@media screen and (max-width: 700px)": {
      height: "2.5rem",
      width: "8rem",
    },

    "@media screen and (max-width: 700px)": {
      height: "2rem",
      width: "8rem",
    },
  },
});
