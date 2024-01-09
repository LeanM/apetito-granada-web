import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";
import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";

export default function MenuModal(props) {
  const { open } = props;
  const classes = useStyles();

  return (
    <Modal
      overflow={false}
      className={classes.container}
      open={open}
      onClose={props.onClose}
    >
      <div className={classes.header}>
        <p style={{ fontWeight: "700", fontSize: "1.2rem", color: colors.nav }}>
          Menu Plates
        </p>
        <button className={classes.upperCloseButton} onClick={props.onClose}>
          X
        </button>
      </div>
      <Modal.Body>
        <Placeholder.Paragraph rows={35} />
      </Modal.Body>

      <div className={classes.header}>
        <button className={classes.closeButton} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "70%",
    height: "80vh",
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
