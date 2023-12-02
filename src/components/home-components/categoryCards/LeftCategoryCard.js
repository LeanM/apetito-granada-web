import { useEffect, useState } from "react";
import asado from "../../../assets/ASADO.jpg";
import styles from "./styles";
import { colors } from "../../../assets/colors";
import CartContext from "../../../context/CartProvider";
import { useContext } from "react";

export default function LeftCategoryCard(props) {
  const classes = styles();
  const { addToCart } = useContext(CartContext);

  return (
    <div
      id={props.categoryData}
      style={{
        backgroundImage: `url(${asado})`,
        borderLeft: `solid 20px ${colors.nav}`,
      }}
      className={classes.container}
    >
      <div className={classes.innerLeftContainer}>
        <div className={classes.imageContainer}>
          <img src={asado} className={classes.imageStyle} />
        </div>

        <div
          className={classes.dataContainer}
          style={{ borderRight: `solid 10px ${colors.nav}` }}
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
