import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        <span className={classes.aboutUsText}>SOBRE NOSOTROS</span>
      </div>
      <div className={classes.middleLine}></div>
      <div className={classes.rightContainer}>
        <span className={classes.infoText}>
          Nuestro objetivo es llevar la experiencia del restaurante a la
          familia, actividades de ocio y negocios corporativos. Suministrada en
          formato de menú preparado estilo bufete o menús de barbacoa listos
          para cocinar y satisfacer todos los gustos.
        </span>
      </div>
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
    width: "45%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    width: "45%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  middleLine: {
    width: "1px",
    height: "50%",
    backgroundColor: colors.secondary,
  },
  aboutUsText: {
    fontWeight: "800",
    width: "50%",
    fontSize: "3.5rem",
    textAlign: "center",
    lineHeight: "3rem",
    color: colors.secondary,
  },
  infoText: {
    fontWeight: "300",
    width: "80%",
    fontSize: "1.1rem",
    textAlign: "center",
    color: colors.textNav,
  },
});
