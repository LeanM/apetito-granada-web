import { createUseStyles } from "react-jss";

export default function Contact() {
  const classes = useStyles();

  return <div className={classes.container}></div>;
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
  },
});
