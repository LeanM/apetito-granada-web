import { useEffect, useState } from "react";
import styles from "./styles";
import { colors } from "../../../assets/colors";
import CartContext from "../../../context/CartProvider";
import { useContext } from "react";
import { createUseStyles } from "react-jss";

export default function LeftCategoryCard(props) {
  const classes = styles();
  const specificClasses = specificStyle();
  const { addToCart } = useContext(CartContext);
  const firstWord = props.categoryData.split(" ")[0];

  return (
    <div
      id={props.categoryData}
      style={{}}
      className={specificClasses.container}
    >
      <div
        className={classes.background}
        style={{ backgroundImage: `url(./categories/${firstWord}.jpg)` }}
      ></div>
      <div className={classes.innerLeftContainer}>
        <div className={classes.imageContainer}>
          <img
            src={"./categories/" + firstWord + ".jpg"}
            className={classes.imageStyle}
          />
        </div>

        <div className={specificClasses.dataContainer} style={{}}>
          <div style={{ fontWeight: "800", fontSize: "2rem" }}>
            {props.categoryData}
          </div>
          <div>
            ASdklasdjaskldjaslkdjdas;ld askljdklasjd lkasj dlkasjd kasjdk
          </div>
          <div className={classes.buttonsContainer}>
            <button className={classes.button} onClick={props.onOpen}>
              Menu
            </button>
            <button
              className={classes.button}
              onClick={() => addToCart(props.categoryData)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const specificStyle = createUseStyles({
  container: {
    width: "90%",
    position: "relative",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5rem",
    //border:`solid 3px ${colors.nav}`,

    //borderRadius:"5px",

    "@media screen and (max-width: 1100px)": {},

    "@media screen and (max-width: 900px)": {
      marginBottom: "0rem",
      width: "100%",
      borderBottom: `solid 5px ${colors.nav}`,
      borderLeft: `solid 5px ${colors.nav}`,
      height: "50vh",
    },
  },
  dataContainer: {
    display: "flex",
    width: "40%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    fontSize: "0.9rem",
    fontFamily: "Poppins",
    backgroundColor: colors.white,
    color: colors.nav,
    //borderRadius:"10px",
    zIndex: "50",
    borderRight: `solid 20px ${colors.nav}`,
    //borderLeft: `solid 1px ${colors.navSemiTransparent}`,
    border: `solid 2px ${colors.nav}`,
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",

    "@media screen and (max-width: 1100px)": {
      width: "80%",
      height: "80%",
      borderTop: `solid 5px ${colors.nav}`,
      border: `solid 1px ${colors.nav}`,
      color: "white",
      textShadow: "black 0 0 10px",
      backgroundColor: colors.navSemiTransparent,
    },

    "@media screen and (max-width: 500px)": {
      width: "100%",
      border: "none",
      padding: "10px",
      //borderTop:`solid 5px ${colors.nav}`,
    },
  },
});
