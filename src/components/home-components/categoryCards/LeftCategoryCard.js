import { useEffect, useState } from "react";
import styles from "./styles";
import { colors } from "../../../assets/colors";
import CartContext from "../../../context/CartProvider";
import { useContext } from "react";

export default function LeftCategoryCard(props) {
  const classes = styles();
  const { addToCart } = useContext(CartContext);
  const firstWord = props.categoryData.split(" ")[0];

  return (
    <div
      id={props.categoryData}
      style={{
        backgroundImage: `url(./categories/${firstWord}.jpg)`,
        borderLeft: `solid 20px ${colors.nav}`,
        borderRight: `solid 2px ${colors.nav}`,
      }}
      className={classes.container}
    >
      <div className={classes.innerLeftContainer}>
        <div className={classes.imageContainer}>
          <img
            src={"./categories/" + firstWord + ".jpg"}
            className={classes.imageStyle}
          />
        </div>

        <div
          className={classes.dataContainer}
          style={{
            borderRight: `solid 10px ${colors.nav}`,
          }}
        >
          <div style={{ fontWeight: "800", fontSize: "2rem" }}>
            {props.categoryData}
          </div>
          <div>
            ASdklasdjaskldjaslkdjdas;ld askljdklasjd lkasj dlkasjd kasjdk
          </div>
          <div className={classes.buttonsContainer}>
            <button className={classes.button}>Menu</button>
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
