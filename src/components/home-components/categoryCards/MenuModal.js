import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import logo from "../../../assets/apetito.png";

export default function MenuModal(props) {
  const { open, data } = props;
  const classes = useStyles();
  const firstWord = data?.categoryName.split(" ")[0];

  return (
    <Modal open={open} onClose={props.onClose}>
      <div
        className={classes.container}
        style={{ backgroundImage: `url(./images/backgroundMenu2.png)` }}
      >
        <button
          className={classes.upperCloseButton}
          onClick={() => props.onClose()}
        >
          X
        </button>
        <div className={classes.header}>
          <div className={classes.headerLine}></div>
          <span className={classes.subTitle}>{data}</span>
          <span className={classes.title}>MENU</span>
          <span className={classes.subTitle}>Apetito Granada</span>
        </div>
        <div className={classes.body}>
          <div className={classes.platesContainer}>
            <div className={classes.platesContainerTitle}>Title 1</div>
            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>
            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>
            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>
          </div>
          <div className={classes.platesContainer}>
            <div className={classes.platesContainerTitle}>Title 1</div>
            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>
            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>
            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>
          </div>
          <div className={classes.platesContainer}>
            <div className={classes.platesContainerTitle}>Title 2</div>
            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>

            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>
            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>
          </div>
          <div className={classes.platesContainer}>
            <div className={classes.platesContainerTitle}>Title 1</div>
            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>
            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>
            <div className={classes.plateItem}>
              <span className={classes.plateName}>Plato numero 1</span>
              <span className={classes.platePrice}>$500</span>
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.bottomInner}>
            <button
              className={classes.closeButton}
              onClick={() => props.onClose()}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

const useStyles = createUseStyles({
  container: {
    position: "absolute",
    width: "70%",
    height: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: colors.textNav,
    backgroundSize: "cover",
    border: `solid 1px ${colors.nav}`,
    borderRadius: "5px",
    boxShadow: "0 0 5px black",
    overflowY: "scroll",
    fontFamily: "Poppins",
  },
  background: {
    position: "absolute",
    backgroundSize: "cover",

    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 0.2,
  },
  header: {
    width: "100%",
    height: "15rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerLine: {
    width: "1px",
    height: "3rem",
    backgroundColor: colors.nav,
    marginBottom: "1rem",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "700",
    color: colors.nav,
    lineHeight: "4.5rem",
  },
  subTitle: {
    fontSize: "1rem",
    fontWeight: "300",
    color: colors.nav,
  },
  body: {
    width: "100%",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: "5rem",
  },
  platesContainer: {
    width: "70%",
    position: "relative",
    borderRadius: "2px",
    border: `solid 2px ${colors.nav}`,
    borderBottom: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: "2.5rem",
    paddingTop: "1rem",
  },
  platesContainerTitle: {
    position: "absolute",
    width: "30%",
    height: "2.5rem",
    backgroundColor: colors.nav,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colors.white,
    fontSize: "1.1rem",
    fontWeight: "200",
    borderRadius: "3px",
    top: "-1rem",
  },
  plateItem: {
    width: "95%",
    height: "4rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1.5rem",
  },
  plateName: {
    color: colors.black,
    fontWeight: "300",
    fontSize: "0.9rem",
  },
  platePrice: {
    color: colors.price,
    fontWeight: "300",
    fontSize: "0.9rem",
  },
  bottom: {
    width: "100%",
    backgroundColor: colors.nav,
  },
  bottomInner: {
    width: "100%",
    height: "15rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  upperCloseButton: {
    right: "10px",
    top: "10px",
    position: "absolute",
    fontWeight: "700",
    backgroundColor: colors.textNav,
    color: colors.nav,
    borderRadius: "100%",
    border: `solid 1px ${colors.navLight}`,

    transition: "background 0.5s, border 0.5s",

    "&:hover": {
      backgroundColor: colors.nav,
      color: colors.white,
    },
  },
  closeButton: {
    width: "8rem",
    height: "3rem",
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
