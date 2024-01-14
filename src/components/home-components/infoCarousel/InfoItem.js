import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";
import { MDBIcon } from "mdb-react-ui-kit";

export default function InfoItem(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <MDBIcon icon="info" style={{ fontSize: "0.6rem" }} />
      <span className={classes.text}>{props.data}</span>
    </div>
  );
}

const useStyles = createUseStyles((theme) => ({
  container: {
    height: "1.8rem",
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    color: "black",
  },
  text: {
    textAlign: "center",
    fontSize: "0.67rem",
    maxLines: 1,
  },
}));
