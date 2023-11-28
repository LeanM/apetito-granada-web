import "../../../css/home.css";
import { colors } from "../../../assets/colors";
import asado from "../../../assets/ASADO.jpg";
import { createUseStyles } from "react-jss";
import homePhoto from "../../../assets/home.jpg";

export default function HomeTop() {
  const classes = useStyles();

  return (
    <div className="home__top">
      <img className={classes.image} src={homePhoto}></img>
      <div className={classes.dataContainer}>
        <p
          style={{
            fontWeight: "800",
            color: colors.nav,
            textShadow: "black 0 0 10px",
          }}
        >
          Bienvenidos a Apetito Granada!
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
    color: "white",
    width: "50%",
    height: "20rem",
    fontSize: "3rem",
    zIndex: 20,
    position: "absolute",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "15%",
    borderTop: `solid 20px ${colors.nav}`,
    backgroundColor: colors.navSemiTransparent,

    "@media screen and (max-width: 1000px)": {
      width: "70%",
    },

    "@media screen and (max-width: 700px)": {
      fontSize: "2rem",
    },
  },
});
