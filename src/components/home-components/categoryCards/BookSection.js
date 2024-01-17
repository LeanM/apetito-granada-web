import { Button } from "rsuite";
import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";
import { useNavigate } from "react-router-dom";

export default function BookSection() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={"./images/apetito.webp"} className={classes.image}></img>
      <div className={classes.subContainer}>
        <div className={classes.textContainer}>
          <p className={classes.text}>Te gustan los menus que estas viendo?</p>
        </div>
        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            onClick={() => navigate("/contact")}
          >
            CONTACTANOS
          </Button>
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "35vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5rem",

    "@media screen and (max-width: 900px)": {
      marginBottom: "3rem",
      marginTop: "3rem",
    },

    "@media screen and (max-width: 500px)": {
      height: "25vh",
    },
  },
  subContainer: {
    display: "flex",
    width: "90%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "4rem",

    borderRadius: "20em",

    borderLeft: `solid 20px ${colors.nav}`,
    borderRight: `solid 20px ${colors.nav}`,
    borderTop: `solid 3px ${colors.nav}`,
    borderBottom: `solid 3px ${colors.nav}`,
    //boxShadow: "black 0 0 10px",
  },
  image: {
    position: "absolute",
    width: "7rem",
    height: "7rem",
    marginBottom: "10rem",

    "@media screen and (max-width: 800px)": {
      height: "6rem",
      width: "6rem",
    },

    "@media screen and (max-width: 500px)": {
      height: "5rem",
      width: "5rem",
      marginBottom: "8rem",
    },
  },
  textContainer: {
    height: "40%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "@media screen and (max-width: 500px)": {
      height: "25%",
      marginBottom: "1.5rem",
    },
  },
  text: {
    color: colors.nav,
    fontSize: "2rem",
    fontWeight: "200",
    height: "50%",

    "@media screen and (max-width: 900px)": {
      fontSize: "1.7rem",
    },

    "@media screen and (max-width: 500px)": {
      fontSize: "1.2rem",
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

    border: `solid 1px ${colors.navLight}`,
    backgroundColor: colors.nav,
    color: colors.textNav,
    "&:hover": {
      backgroundColor: colors.textNav,
      color: colors.nav,
    },

    "@media screen and (max-width: 700px)": {
      height: "2rem",
      width: "8rem",
    },
  },
});
