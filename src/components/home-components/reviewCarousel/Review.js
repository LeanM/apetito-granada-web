import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";

export default function Review(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.text}>"{props.categoryName}..." | 3⭐</p>
    </div>
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
    transition: "background 0.5s ease-in-out, color 0.5s",

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
