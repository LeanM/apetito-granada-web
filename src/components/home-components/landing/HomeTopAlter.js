import { colors } from "../../../assets/colors";
import { createUseStyles } from "react-jss";
import { Button } from "rsuite";
import Reveal from "../../animation/Reveal";
import { useNavigate } from "react-router-dom";

export default function HomeTopAlter() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.homeTop}>
      <div className={classes.subContainer}>
        <Reveal animationVariant="left" styles={classes.dataContainer}>
          <div className={classes.dataFirstRow}>
            <p className={classes.titleText}>APETITO GRANADA</p>
          </div>
          <div
            className={classes.dataFirstRow}
            style={{ marginLeft: "1rem", marginTop: "2rem" }}
          >
            <p className={classes.subText}>
              Servicio de catering para la ciudad de Granada y alrededores!
            </p>
            <Button
              className={classes.bookButton}
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contactanos
            </Button>
          </div>
        </Reveal>
        <Reveal animationVariant="right" styles={classes.visualContainer}>
          <img className={classes.dishImage} src={"./images/dish.webp"}></img>
          <img
            className={classes.splatImage}
            src={"./images/splat2.webp"}
          ></img>
        </Reveal>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  homeTop: {
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    background: `linear-gradient(${colors.navSecondary},${colors.nav})`,
    alignItems: "center",
    //borderBottom: `solid 1px ${colors.secondary}`,
    //boxShadow: "black 0 0 5px",
    //overflow: "hidden",
    zIndex: "10",
  },
  subContainer: {
    width: "100%",
    height: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8rem",

    "@media screen and (max-width: 800px)": {
      flexDirection: "column",
      marginTop: "15rem",
    },
  },
  visualContainer: {
    width: "45%",
    height: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",

    "@media screen and (max-width: 800px)": {
      width: "80%",
      height: "45%",
      marginTop: 0,
    },
  },
  dishImage: {
    width: "95%",
    height: "95%",
    objectFit: "contain",
    position: "absolute",
    bottom: "-6rem",
    right: "0rem",
    zIndex: "100",

    "@media screen and (max-width: 800px)": {
      bottom: 0,
      width: "18rem",
      height: "18rem",
      marginLeft: "auto",
      marginRight: "auto",
    },

    "@media screen and (max-width: 700px)": {
      bottom: 0,
      width: "14rem",
      height: "14rem",
    },
  },
  splatImage: {
    width: "80%",
    height: "80%",
    objectFit: "contain",
    left: "-3rem",
    position: "absolute",
    zIndex: "50",
    opacity: 1,

    "@media screen and (max-width: 800px)": {
      left: 0,
    },
  },
  dataContainer: {
    width: "45%",
    height: "90%",
    paddingLeft: "3rem",
    zIndex: 80,

    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "1rem",

    "@media screen and (max-width: 800px)": {
      width: "80%",
      height: "45%",
      gap: 0,
      alignItems: "center",
      paddingLeft: "0",
    },
  },
  dataFirstRow: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",

    "@media screen and (max-width: 800px)": {
      alignItems: "center",
    },
  },
  subText: {
    fontSize: "1rem",
    fontWeight: "200",
    color: colors.textNav,
    marginTop: "0rem",

    "@media screen and (max-width: 600px)": {
      fontSize: "0.8rem",
      textAlign: "center",
    },
  },
  titleText: {
    width: "100%",
    fontWeight: "800",
    fontSize: "6.3rem",
    lineHeight: "4.7rem",
    color: colors.secondary,

    "@media screen and (max-width: 1200px)": {
      fontSize: "5.3rem",
      lineHeight: "3.7rem",
    },

    "@media screen and (max-width: 800px)": {
      fontSize: "4.3rem",
      lineHeight: "2.7rem",
      textAlign: "center",
    },

    "@media screen and (max-width: 600px)": {
      fontSize: "3.3rem",
      lineHeight: "2.5rem",
    },
  },
  background: {
    position: "absolute",
    zIndex: "10",
    height: "40rem",
    width: "200%",
    backgroundColor: colors.nav,
    transform: "rotate(-60deg)",
    right: "-20rem",
  },
  bookButton: {
    marginTop: "1rem",
    fontSize: "1rem",
    fontWeight: "200",
    backgroundColor: colors.nav,
    color: colors.textNav,
    border: `solid 1px ${colors.textNav}`,

    fontWeight: "300",
    "&:hover": {
      backgroundColor: colors.textNav,
      color: colors.nav,
    },
  },
});
