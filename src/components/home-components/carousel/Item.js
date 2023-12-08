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
    borderBottom: "solid 1px grey",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    textDecoration: "none !important",
    color: "black",
    transition: "background 0.3s ease-in-out, color 0.3s",

    "&:hover": {
      backgroundColor: colors.navSemiTransparent,
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
