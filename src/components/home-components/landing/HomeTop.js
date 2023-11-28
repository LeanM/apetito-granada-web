import "../../../css/home.css";
import { colors } from "../../../assets/colors";
import asado from "../../../assets/ASADO.jpg";
import { createUseStyles } from "react-jss";
import homePhoto from "../../../assets/home.jpg";

export default function HomeTop() {
  const classes = useStyles();

  return (
    <div className="home__top">
      <div className={classes.background}></div>
      <img className={classes.image} src={homePhoto}></img>
      <div className={classes.dataContainer}>
        <p
          style={{
            fontWeight: "800",
            color: colors.nav,
            textShadow: "black 0 0 10px",
          }}
        >
          Bienvenidos!
        </p>
        <p
          style={{
            width: "60%",
            fontWeight: "300",
            fontSize: "1.1rem",
            color: "white",
            textShadow: `0 0 10px ${colors.black}`,
          }}
        >
          El negocio de Apetito Granada proveerá servicio de catering a la
          ciudad y alrededores de Granada. Produciendo estándares alimentarios
          de alta calidad utilizando ingredientes básicos de origen local.
        </p>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(80%)",
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
    top: "15%",
    borderTop: `solid 20px ${colors.nav}`,
    backgroundColor: colors.navSemiTransparent,
    borderRadius: "100%",

    "@media screen and (max-width: 1000px)": {},

    "@media screen and (max-width: 700px)": {
      fontSize: "2rem",
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
});
