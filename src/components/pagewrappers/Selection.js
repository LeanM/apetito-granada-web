import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";
import CartContext from "../../context/CartProvider";
import { useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import { colors } from "../../assets/colors";

export default function Selection() {
  const { cartLength } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const classes = styles();

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        className={classes.modalContainer}
        backdrop={true}
        overflow={true}
      >
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Placeholder.Paragraph />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className={classes.selectionContainer}
        onClick={() => {
          handleOpen();
        }}
      >
        <p className={classes.selectionText}>{cartLength()}</p>
      </div>
    </>
  );
}

const styles = createUseStyles({
  selectionContainer: {
    position: "fixed",
    bottom: "3rem",
    right: "5rem",
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: "20px",
    backgroundColor: colors.navLight,
    border: `solid 2px ${colors.nav}`,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  selectionText: {
    fontWeight: "800",
    fontSize: "1rem",
  },
  modalContainer: {
    left: "0px",
  },
});
