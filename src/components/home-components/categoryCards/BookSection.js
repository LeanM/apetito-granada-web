import { Button } from "rsuite";
import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";

export default function BookSection() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <p className={classes.text}>Te gustan los menus que estas viendo?</p>
        <Button className={classes.button}>BOOK NOW</Button>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "10rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5rem",
  },
  subContainer: {
    display: "flex",
    width: "90%",
    height: "90%",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "2rem",

    borderLeft: `solid 20px ${colors.nav}`,
    borderRight: `solid 20px ${colors.nav}`,
    borderTop: `solid 2px ${colors.nav}`,
    borderBottom: `solid 2px ${colors.nav}`,
    //boxShadow: "black 0 0 10px",
  },
  text: {
    color: colors.nav,
    fontSize: "2rem",
  },
  button: {
    width: "10rem",
    backgroundColor: colors.textNav,
    border: `solid 1px ${colors.navLight}`,
    color: colors.nav,
    "&:hover": {
      backgroundColor: colors.nav,
      border: `solid 1px ${colors.navLight}`,
      color: colors.textNav,
    },
  },
});
