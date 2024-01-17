import { createUseStyles } from "react-jss";
import { colors } from "../../assets/colors";
import { Button } from "rsuite";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <div className={classes.contactContainer}>
          <div className={classes.contactInfo}>
            <p
              className={classes.contactItem}
              style={{ fontWeight: "600", marginBottom: "0.5rem" }}
            >
              CONTACTOS
            </p>
            <p className={classes.contactItem}>+54 2983410411</p>
            <p className={classes.contactItem}>apetitogranadagmail.com</p>
          </div>
        </div>
        <div className={classes.separation}></div>
        <div className={classes.bookContainer}>
          <img src={"./images/apetito.webp"} className={classes.image}></img>
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
    height: "40vh",
    fontFamily: "Poppins",

    "@media screen and (max-width: 600px)": {
      height: "80vh",
    },
  },
  subContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: colors.nav,

    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
      justifyContent: "center",
      gap: "1rem",
    },
  },
  separation: {
    height: "80%",
    width: "1px",
    backgroundColor: colors.textNav,

    "@media screen and (max-width: 600px)": {
      display: "none",
    },
  },
  contactContainer: {
    width: "40%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contactInfo: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  contactItem: {
    color: colors.white,
    fontWeight: "200",
    fontSize: "1rem",
  },
  bookContainer: {
    width: "40%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },
  image: {
    width: "7rem",
    height: "7rem",

    "@media screen and (max-width: 800px)": {
      height: "6rem",
      width: "6rem",
    },

    "@media screen and (max-width: 500px)": {
      height: "5rem",
      width: "5rem",
    },
  },
  button: {
    width: "10rem",
    backgroundColor: colors.nav,

    color: colors.textNav,
    border: `solid 1px ${colors.navLight}`,

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
