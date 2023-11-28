import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";

export default function Item(props) {
  const classes = useStyles();
  return (
    <a className={classes.container} href={"#" + props.categoryName}>
      <p className={classes.text}>{props.categoryName}</p>
    </a>
  );
}

const useStyles = createUseStyles((theme) => ({
  container: {
    width: "12rem",
    height: "3rem",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    border: "solid 1px grey",
    textDecoration: "none !important",
    backgroundColor: colors.nav,
    color: colors.text,
    transition: "background 0.5s ease-in-out, color 0.5s",

    "&:hover": {
      backgroundColor: colors.hover,
      color: "black",
    },

    "@media screen and (max-width: 1300px)": {
      width: "10rem",
    },

    "@media screen and (max-width: 800px)": {
      width: "7rem",
    },
  },
  text: {
    textAlign: "center",
  },
}));
