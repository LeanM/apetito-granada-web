import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function MenuModal(props) {
  const { open } = props;
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={classes.container}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </div>
    </Modal>
  );
}

const useStyles = createUseStyles({
  container: {
    position: "absolute",
    width: "75%",
    height: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: colors.nav,
    border: "2px solid #000",
    boxShadow: "0 0 5px black",
    overflowY: "scroll",
    fontFamily: "Poppins",
  },
  header: {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  upperCloseButton: {
    right: 0,
    position: "absolute",
    fontWeight: "700",
    backgroundColor: colors.nav,
    color: colors.white,
    borderRadius: "100%",
    border: `solid 1px ${colors.navLight}`,

    transition: "background 0.5s, border 0.5s",

    "&:hover": {
      backgroundColor: colors.textNav,
      color: colors.nav,
    },
  },
  closeButton: {
    width: "5rem",
    height: "2rem",

    border: `solid 1px ${colors.navLight}`,
    borderRadius: "20px",
    backgroundColor: colors.nav,
    color: colors.textNav,

    transition: "background 0.5s, border 0.5s",

    "&:hover": {
      color: colors.nav,
      backgroundColor: colors.textNav,
    },
  },
});
