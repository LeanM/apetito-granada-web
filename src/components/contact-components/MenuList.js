import { createUseStyles } from "react-jss";
import { colors } from "../../assets/colors";
import { useContext, useEffect } from "react";
import CartContext from "../../context/CartProvider";
import toast from "react-hot-toast";

export default function MenuList() {
  const classes = useStyles();
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className={classes.container}>
      {cart.map((menu) => {
        const firstWord = menu?.categoryName.split(" ")[0];
        return (
          <div className={classes.itemContainer}>
            <div className={classes.item}>
              <img
                className={classes.itemImage}
                src={"./categories/" + firstWord + ".jpg"}
              ></img>
              <p className={classes.itemText}>{menu?.categoryName}</p>
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
    width: "90%",
    height: "100%",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: colors.nav,
    overflowY: "scroll",
    padding: "10px",
    fontFamily: "Poppins",
    border: `solid 2px ${colors.navLight}`,
  },
  itemContainer: {
    width: "100%",
    minHeight: "4rem",
    display: "flex",
    padding: "5px",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "0.7rem",
    fontWeight: "700",
    borderRadius: "5px",
    backgroundColor: colors.nav,
    gap: "1rem",
  },
  item: {
    width: "90%",
    minHeight: "4rem",
    display: "flex",
    padding: "5px",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "5px",

    backgroundColor: colors.nav,
    color: colors.white,
    gap: "1rem",

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
    textAlign: "start",
    fontSize: "0.7rem",
    "@media screen and (max-width: 700px)": {
      fontSize: "0.7rem",
    },
  },
  removeButton: {
    width: "1.5rem",
    height: "1.5rem",

    textAlign: "center",

    borderRadius: "20px",
    border: `solid 1px ${colors.textNav}`,
    backgroundColor: colors.nav,
    color: colors.white,

    transition: "background 0.2s, color 0.2s",

    "&:hover": {
      backgroundColor: colors.textNav,
      color: colors.nav,
    },

    "@media screen and (max-width: 400px)": {
      fontSize: "0.6rem",
    },
  },
});
