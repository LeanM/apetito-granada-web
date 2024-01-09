import { createUseStyles } from "react-jss";
import { colors } from "../../assets/colors";
import { useContext } from "react";
import CartContext from "../../context/CartProvider";
import toast from "react-hot-toast";

export default function MenuList() {
  const classes = useStyles();
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className={classes.container}>
      {cart.map((menu) => {
        const firstWord = menu.categoryMenu.split(" ")[0];
        return (
          <div className={classes.itemContainer}>
            <div className={classes.item}>
              <img
                className={classes.itemImage}
                src={"./categories/" + firstWord + ".jpg"}
              ></img>
              <p className={classes.itemText}>{menu.categoryMenu}</p>
            </div>
            <button
              className={classes.removeButton}
              onClick={() => {
                removeFromCart(menu);
                toast.error("Removed menu from interest!");
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "25rem",
    height: "15rem",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    border: `solid 2px ${colors.nav}`,
    backgroundColor: colors.nav,
    overflowY: "scroll",
    padding: "10px",
    fontFamily: "Poppins",
  },
  itemContainer: {
    width: "100%",
    minHeight: "3.5rem",
    display: "flex",
    padding: "5px",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "0.9rem",
    fontWeight: "700",
    borderRadius: "5px",
    backgroundColor: colors.nav,
    gap: "1rem",
  },
  item: {
    width: "90%",
    minHeight: "3.5rem",
    display: "flex",
    padding: "5px",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "5px",
    backgroundColor: colors.nav,
    gap: "1rem",
    color: colors.white,

    transition: "background 0.5s, color 0.5s",

    "&:hover": {
      backgroundColor: colors.textNav,
      color: colors.nav,
    },
  },
  itemImage: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "100%",
    border: `solid 2px ${colors.navLight}`,
  },
  itemText: {
    textAlign: "center",
  },
  removeButton: {
    width: "10%",
    height: "80%",

    borderRadius: "20px",
    border: `solid 1px ${colors.textNav}`,
    backgroundColor: colors.nav,
    color: colors.white,

    "&:hover": {
      backgroundColor: colors.textNav,
      color: colors.nav,
    },
  },
});
