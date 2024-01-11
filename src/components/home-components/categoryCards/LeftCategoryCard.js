import { useEffect, useState } from "react";
import styles from "./styles";
import { colors } from "../../../assets/colors";
import CartContext from "../../../context/CartProvider";
import { useContext } from "react";
import { createUseStyles } from "react-jss";
import { Whisper, Tooltip } from "rsuite";

export default function LeftCategoryCard(props) {
  const classes = styles();
  const specificClasses = specificStyle();
  const { addToCart } = useContext(CartContext);
  const firstWord = props.categoryData?.categoryName.split(" ")[0];

  return (
    <div
      id={props.categoryData?.categoryName}
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
          <div className={specificClasses.infoContainer}>
            <div
              style={{ fontWeight: "800", fontSize: "1.7rem", height: "50%" }}
            >
              {props.categoryData?.categoryName}
            </div>
            <p style={{ height: "40%" }}>
              {props.categoryData?.categoryDescription}
            </p>
          </div>
          <div className={classes.buttonsContainer}>
            <button
              className={classes.menuButton}
              onClick={() => props.onOpenMenu(props.categoryData)}
            >
              Menu
            </button>
            <Whisper
              trigger="hover"
              placement={"bottom"}
              speaker={
                <Tooltip
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "Poppins",
                    textAlign: "center",
                    borderRadius: "20px",
                  }}
                >
                  Añade este menu a la lista de interesados!
                </Tooltip>
              }
            >
              <button
                className={classes.addButton}
                onClick={() => addToCart(props.categoryData)}
              >
                +
              </button>
            </Whisper>
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
      width: "97%",
      //borderBottom: `solid 5px ${colors.nav}`,
      //borderLeft: `solid 5px ${colors.nav}`,
      height: "70vh",
    },
  },
  dataContainer: {
    display: "flex",
    width: "45%",
    height: "100%",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.9rem",
    fontFamily: "Poppins",
    backgroundColor: colors.white,
    borderRadius: "20px 20px 20px 20px",
    zIndex: "50",
    borderRight: `solid 20px ${colors.nav}`,
    border: `solid 2px ${colors.nav}`,

    "@media screen and (max-width: 1100px)": {
      width: "80%",
      height: "80%",
      borderRight: `solid 20px ${colors.nav}`,
      border: `solid 1px ${colors.nav}`,
      color: colors.white,

      backgroundColor: colors.textNavSemiTransparent,
    },

    "@media screen and (max-width: 500px)": {
      width: "95%",
      padding: "10px",
      //borderTop:`solid 5px ${colors.nav}`,
    },
  },

  infoContainer: {
    width: "90%",
    height: "50%",
    padding: "10px",
    backgroundColor: colors.textNav,
    borderRadius: "20px",
    borderLeft: `solid 15px ${colors.nav}`,
    color: colors.nav,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    "@media screen and (max-width: 1100px)": {
      backgroundColor: colors.textNavLowTransparent,
      color: colors.nav,
      borderLeft: `solid 15px ${colors.nav}`,
    },
  },
});
