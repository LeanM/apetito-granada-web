import { colors } from "../../../assets/colors";
import { createUseStyles } from "react-jss";
import homePhoto from "../../../assets/home.jpg";
import { Button } from "rsuite";
import Reveal from "../../animation/Reveal";
import { useNavigate } from "react-router-dom";
import splat from "../../../assets/splat2.png";
import dish from "../../../assets/dish.png";

export default function HomeTopAlter() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.homeTop}>
      <div className={classes.subContainer}>
        <div className={classes.dataContainer}>
          <div className={classes.dataFirstRow}>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: "200",
                color: colors.textNav,
                marginLeft: "0.5rem",
                height: "1rem",
              }}
            >
              Bienvenidos a
            </p>
            <p className={classes.titleText}>Apetito Granada</p>
          </div>
          <div className={classes.dataFirstRow} style={{ paddingLeft: "10px" }}>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: "300",
                color: colors.textNav,
                marginTop: "2rem",
              }}
            >
              Servicio de catering para la ciudad de Granada y alrededores!
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
        </div>
        <div className={classes.visualContainer}>
          <img className={classes.dishImage} src={dish}></img>
          <img className={classes.splatImage} src={splat}></img>
        </div>
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
    boxShadow: "black 0 0 5px",
    overflow: "hidden",
    zIndex: "10",
  },
  subContainer: {
    width: "100%",
    height: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8rem",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(80%)",
  },
  visualContainer: {
    width: "45%",
    height: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },
  dishImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    position: "absolute",
    bottom: "-6rem",
    right: "-5rem",
    zIndex: "100",
  },
  splatImage: {
    width: "80%",
    height: "80%",
    objectFit: "contain",
    left: "-3rem",
    position: "absolute",
    zIndex: "50",
    opacity: 1,
  },
  dataContainer: {
    width: "45%",
    height: "90%",
    paddingLeft: "3rem",
    zIndex: 20,

    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "1rem",

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
  dataFirstRow: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  titleText: {
    width: "100%",
    fontWeight: "800",
    fontSize: "4rem",
    color: colors.secondary,

    "@media screen and (max-width: 1000px)": {
      fontSize: "1rem",
    },

    "@media screen and (max-width: 500px)": {
      fontSize: "0.9rem",
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
