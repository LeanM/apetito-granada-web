import { colors } from "../../../assets/colors";
import { createUseStyles } from "react-jss";
import homePhoto from "../../../assets/home.jpg";
import { Button } from "rsuite";
import Reveal from "../../animation/Reveal";
import { useNavigate } from "react-router-dom";

export default function HomeTop() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.homeTop}>
      <div className={classes.background}></div>
      <img className={classes.image} src={homePhoto}></img>

      <Reveal styles={classes.revealContainer}>
        <div className={classes.dataContainer}>
          <p
            style={{
              fontWeight: "800",
              color: colors.textNav,
              textShadow: "black 0 0 10px",
            }}
          >
            Bienvenidos
          </p>
          <p className={classes.infoText}>
            En Apetito Granada proveemos el servicio de catering a la ciudad y
            alrededores de Granada. Produciendo estándares alimentarios de alta
            calidad utilizando ingredientes básicos de origen local.
          </p>
          <Button
            className={classes.bookButton}
            onClick={() => {
              navigate("/contact");
            }}
          >
            BOOK NOW
          </Button>
        </div>
      </Reveal>
    </div>
  );
}

const useStyles = createUseStyles({
  homeTop: {
    width: "100%",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "black 0 0 5px",
    overflow: "hidden",
    zIndex: "10",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(80%)",
  },
  revealContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  dataContainer: {
    width: "35rem",
    height: "22rem",
    fontSize: "2rem",
    zIndex: 20,
    position: "absolute",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "30%",
    borderTop: `solid 20px ${colors.nav}`,
    backgroundColor: colors.navSemiTransparent,
    borderRadius: "100%",

    "@media screen and (max-width: 1000px)": {
      width: "30rem",
      height: "20rem",
      fontSize: "1.8rem",
    },

    "@media screen and (max-width: 500px)": {
      width: "20rem",
      height: "18rem",
      fontSize: "1.7rem",
    },
  },
  infoText: {
    width: "60%",
    fontWeight: "300",
    fontSize: "0.9rem",
    color: "white",
    textShadow: `0 0 10px ${colors.black}`,

    "@media screen and (max-width: 1000px)": {
      fontSize: "1rem",
    },

    "@media screen and (max-width: 500px)": {
      fontSize: "0.9rem",
    },
  },
  background: {
    display: "none",
    position: "absolute",
    zIndex: "10",
    height: "60%",
    width: "200%",
    backgroundColor: colors.navLight,
    bottom: "400px",
    transform: "rotate(-60deg)",
    left: "-1000px",

    "@media screen and (max-width: 1400px)": {
      left: "-850px",
    },

    "@media screen and (max-width: 1200px)": {
      left: "-700px",
    },

    "@media screen and (max-width: 1000px)": {
      height: "50%",
      left: "-500px",
    },

    "@media screen and (max-width: 800px)": {
      left: "-400px",
    },

    "@media screen and (max-width: 500px)": {
      height: "40%",
      width: "250%",
      bottom: "400px",
      left: "-300px",
    },
  },
  bookButton: {
    marginTop: "1rem",
    backgroundColor: colors.nav,
    color: colors.textNav,
    fontWeight: "300",
    "&:hover": {
      backgroundColor: colors.textNav,
      color: colors.nav,
    },
  },
});
