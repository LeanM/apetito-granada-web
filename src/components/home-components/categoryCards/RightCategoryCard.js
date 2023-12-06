import { useEffect, useState } from "react";
import asado from "../../../assets/ASADO.jpg";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import { colors } from "../../../assets/colors";
import { useContext } from "react";
import CartContext from "../../../context/CartProvider";

export default function RightCategoryCard(props) {
  const classes = styles();
  const { addToCart } = useContext(CartContext);

  return (
    <div
      id={props.categoryData}
      style={{
        backgroundImage: `url(${asado})`,
        borderRight: `solid 20px ${colors.nav}`,
      }}
      className={classes.container}
    >
      <div className={classes.innerRightContainer}>
        <div
          className={classes.dataContainer}
          style={{ borderLeft: `solid 10px ${colors.nav}` }}
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
        <div className={classes.imageContainer}>
          <img src={asado} className={classes.imageStyle} />
        </div>
      </div>
    </div>
  );
}
