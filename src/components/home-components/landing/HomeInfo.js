import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";

export default function HomeInfo() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <p className={classes.titleText}>COMO TRABAJAMOS</p>
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <div className={classes.dataContainer}>
            <div className={classes.numberContainer}>1.</div>
            <div className={classes.textContainer}>
              <p className={classes.text}>
                Observe las diferentes opciones, combinaciones o menús a medida
                con una completa selección de platos internacionales.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.subContainer}>
          <div className={classes.dataContainer}>
            <div className={classes.numberContainer}>2.</div>
            <div className={classes.textContainer}>
              <p className={classes.text}>
                Añada a su seleccion los menus de interes segun sus gustos y
                preferencias
              </p>
            </div>
          </div>
        </div>
        <div className={classes.subContainer}>
          <div className={classes.dataContainer}>
            <div className={classes.numberContainer}>3.</div>
            <div className={classes.textContainer}>
              <p className={classes.text}>
                Comuniquese con nosotros a traves de la seccion de contacto,
                especificando los datos necesarios.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.subContainer}>
          <div className={classes.dataContainer}>
            <div className={classes.numberContainer}>4.</div>
            <div className={classes.textContainer}>
              <p className={classes.text}>
                Por ultimo nos comuniaremos via mail para acordar todos los
                detalles y confirmar el catering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  mainContainer: {
    width: "100%",
    height: "55vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
    //backgroundColor: colors.navUltraLight,
    backgroundColor: "white",
    //borderTop: `solid 3px ${colors.nav}`,
    borderBottom: `solid 3px ${colors.nav}`,

    "@media screen and (max-width: 1000px)": {
      height: "110vh",
    },

    "@media screen and (max-width: 750px)": {
      height: "120vh",
    },
  },
  titleText: {
    fontSize: "1.7rem",
    fontWeight: "800",
    color: colors.black,
    marginTop: "1rem",
    fontFamily: "Poppins",
  },
  container: {
    height: "90%",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: "15",

    "@media screen and (max-width: 1000px)": {
      flexWrap: "wrap",
      height: "100vh",
    },

    "@media screen and (max-width: 750px)": {
      flexDirection: "column",
      height: "130vh",
      justifyContent: "center",
      flexWrap: "nowrap",
      gap: "1rem",
      padding: "2rem",
    },
  },
  subContainer: {
    width: "25%",
    height: "90%",
    borderRight: "solid 1px grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "@media screen and (max-width: 1000px)": {
      width: "40%",
      height: "45%",
      boxShadow: "0 0 5px black",
      border: "none",
      borderRadius: "20px",
    },

    "@media screen and (max-width: 750px)": {
      width: "80%",
      height: "22%",
      borderTop: "solid 1px black",
      boxShadow: "none",
      borderRadius: "0",
    },

    "@media screen and (max-width: 600px)": {
      width: "100%",
    },

    "@media screen and (max-width: 450px)": {
      height: "22%",
      borderRadius: "0",
    },
  },
  dataContainer: {
    width: "95%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",

    "@media screen and (max-width: 1000px)": {
      gap: "1rem",
    },
  },
  numberContainer: {
    fontSize: "5rem",
    fontWeight: "800",
    height: "40%",

    "@media screen and (max-width: 750px)": {
      fontSize: "4rem",
    },

    "@media screen and (max-width: 600px)": {
      fontSize: "3.5rem",
    },
  },
  textContainer: {
    height: "50%",
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",

    "@media screen and (max-width: 1000px)": {
      width: "85%",
    },

    "@media screen and (max-width: 750px)": {
      width: "80%",
    },
  },
  text: {
    fontSize: "1rem",
    color: colors.black,

    "@media screen and (max-width: 1100px)": {
      fontSize: "0.9rem",
    },

    "@media screen and (max-width: 750px)": {
      fontSize: "0.8rem",
    },

    "@media screen and (max-width: 600px)": {
      fontSize: "0.65rem",
    },
  },
});
