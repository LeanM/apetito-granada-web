import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";
import Reveal from "../../animation/Reveal";

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Reveal styles={classes.leftContainer}>
        <span className={classes.aboutUsText}>SOBRE NOSOTROS</span>
      </Reveal>
      <div className={classes.middleLine}></div>

      <Reveal styles={classes.rightContainer}>
        <span className={classes.infoText}>
          Nuestro objetivo es llevar la experiencia del restaurante a la
          familia, actividades de ocio y negocios corporativos. Suministrada en
          formato de menú preparado estilo bufete o menús de barbacoa listos
          para cocinar y satisfacer todos los gustos.
        </span>
      </Reveal>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "65vh",
    display: "flex",
    //flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
    backgroundColor: colors.nav,
    //backgroundImage: `-webkit-linear-gradient(30deg, ${colors.secondary} 50%, ${colors.nav} 50%)`,
  },
  leftContainer: {
    width: "48%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    width: "48%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  middleLine: {
    width: "1px",
    height: "50%",
    backgroundColor: colors.secondary,

    "@media screen and (max-width: 800px)": {
      height: "30%",
    },
  },
  aboutUsText: {
    fontWeight: "800",
    width: "50%",
    fontSize: "3.5rem",
    textAlign: "center",
    lineHeight: "3rem",
    color: colors.secondary,

    "@media screen and (max-width: 1200px)": {
      fontSize: "2.5rem",
      lineHeight: "2rem",
    },

    "@media screen and (max-width: 800px)": {
      fontSize: "2rem",
      lineHeight: "1.8rem",
    },

    "@media screen and (max-width: 600px)": {
      fontSize: "1.5rem",
      lineHeight: "1rem",
    },

    "@media screen and (max-width: 500px)": {
      fontSize: "1.2rem",
      lineHeight: "1rem",
    },
  },
  infoText: {
    fontWeight: "300",
    width: "80%",
    fontSize: "1.1rem",
    textAlign: "center",
    color: colors.textNav,

    "@media screen and (max-width: 1200px)": {
      fontSize: "0.9rem",
    },

    "@media screen and (max-width: 800px)": {
      fontSize: "0.7rem",
    },

    "@media screen and (max-width: 600px)": {
      fontSize: "0.6rem",
    },

    "@media screen and (max-width: 500px)": {
      fontSize: "0.5rem",
    },
  },
});
