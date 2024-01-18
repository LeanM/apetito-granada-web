import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";
import { useContext } from "react";
import CartContext from "../../../context/CartProvider";
import { Whisper, Tooltip } from "rsuite";

export default function CategoryCard(props) {
  const classes = generalStyles();
  const classesLeft = specificStyleLeft();
  const classesRight = specificStyleRight();
  const { type } = props;
  const { addToCart, emptyCart } = useContext(CartContext);
  const firstWord = props.categoryData?.categoryName.split(" ")[0];

  const importImages = require.context(
    "../../../assets/images/categories",
    false,
    /\.(webp)$/
  );
  const imagenesDisponibles = importImages
    .keys()
    .map((importImages) => importImages.substring(2));

  //const availableImage = imagenesDisponibles.includes(`${firstWord}.webp`);
  const image = importImages(`./${firstWord}.webp`);

  return (
    <div id={props.categoryData?.categoryName} className={classes.container}>
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div
        className={
          type === "left"
            ? classesLeft.innerContainer
            : classesRight.innerContainer
        }
      >
        <div
          className={
            type === "left"
              ? classesLeft.dataContainer
              : classesRight.dataContainer
          }
        >
          <div
            className={
              type === "left"
                ? classesLeft.infoContainer
                : classesRight.infoContainer
            }
          >
            <div style={{ fontWeight: "200", fontSize: "3rem" }}>
              {props.categoryData?.categoryName}
            </div>
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
                onClick={() => {
                  addToCart(props.categoryData);
                }}
              >
                +
              </button>
            </Whisper>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img
            src={image}
            className={
              type === "left" ? classesLeft.imageStyle : classesRight.imageStyle
            }
          />
        </div>
      </div>
    </div>
  );
}

const generalStyles = createUseStyles({
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
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundSize: "cover",
    borderRadius: "20px",
    boxShadow: `0 0 10px ${colors.black}`,

    opacity: 0,

    "&:hover": {},

    "@media screen and (max-width: 1100px)": {
      opacity: 1,
    },
  },

  imageContainer: {
    width: "54.5%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "100",

    "@media screen and (max-width: 1100px)": {
      display: "none",
    },
  },

  buttonsContainer: {
    width: "90%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.1rem",
  },
  menuButton: {
    width: "6rem",
    height: "3.5rem",
    borderRadius: "20px 4px 4px 20px",
    backgroundColor: colors.nav,
    color: colors.textNav,
    transition: "background 0.5s ease-in-out, color 0.5s",

    "&:hover": {
      backgroundColor: colors.navLight,
      color: colors.textNav,
    },
  },
  addButton: {
    width: "2.5rem",
    height: "3.5rem",
    borderRadius: "4px 20px 20px 4px",
    fontWeight: "600",
    backgroundColor: colors.nav,
    color: colors.textNav,
    transition: "background 0.5s ease-in-out, color 0.5s",

    "&:hover": {
      backgroundColor: colors.navLight,
      color: colors.textNav,
    },
  },
});

const specificStyleRight = createUseStyles({
  innerContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "@media screen and (max-width: 1100px)": {
      justifyContent: "center",
    },
  },
  dataContainer: {
    display: "flex",
    width: "45%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.9rem",
    backgroundColor: colors.white,
    borderRadius: "100em 5em 5em 100em",
    color: colors.nav,
    zIndex: "50",
    borderLeft: `solid 20px ${colors.nav}`,
    //borderTop: `solid 3px ${colors.nav}`,
    //borderBottom: `solid 3px ${colors.nav}`,
    borderRight: `solid 3px ${colors.nav}`,

    "@media screen and (max-width: 1100px)": {
      width: "80%",
      height: "80%",
      color: colors.white,
      border: `solid 1px ${colors.nav}`,
      borderLeft: `solid 20px ${colors.nav}`,

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
    height: "60%",
    //backgroundColor: colors.textNav,
    paddingLeft: "15px",
    borderRadius: "1em",
    //borderRight: `solid 15px ${colors.nav}`,
    color: colors.nav,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    "@media screen and (max-width: 1100px)": {
      backgroundColor: colors.textNavLowTransparent,
      color: colors.nav,
      borderRight: `solid 15px ${colors.nav}`,
    },
  },

  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition:
      "transform 0.5s, border 0.5s ease-in-out, border-radius 0.5s, box-shadow 0.8s",
    zIndex: "101",
    borderRadius: "10em 100em 100em 10em",
    //border:`solid 2px ${colors.navSemiTransparent}`,

    "&:hover": {
      transform: "scale(1.01)",
      border: "none",
      //border:`solid 1px ${colors.blackLight}`,
      boxShadow: `0 0 15px ${colors.blackLight}`,
    },

    "@media screen and (max-width: 1100px)": {
      display: "none",
    },
  },
});

const specificStyleLeft = createUseStyles({
  innerContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",

    "@media screen and (max-width: 1100px)": {
      justifyContent: "center",
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
    borderRadius: "10em 100em 100em 10em",
    zIndex: "50",
    borderRight: `solid 20px ${colors.nav}`,
    //borderTop: `solid 3px ${colors.nav}`,
    //borderBottom: `solid 3px ${colors.nav}`,
    borderLeft: `solid 3px ${colors.nav}`,

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
    height: "60%",
    padding: "10px",
    //backgroundColor: colors.nav,
    borderRadius: "20em",
    //borderLeft: `solid 15px ${colors.nav}`,
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
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition:
      "transform 0.5s, border 0.5s ease-in-out, border-radius 0.5s, box-shadow 0.8s",
    zIndex: "101",
    borderRadius: "100em 10em 10em 100em",
    //border:`solid 2px ${colors.navSemiTransparent}`,

    "&:hover": {
      transform: "scale(1.01)",
      border: "none",
      //border:`solid 1px ${colors.blackLight}`,
      boxShadow: `0 0 15px ${colors.blackLight}`,
    },

    "@media screen and (max-width: 1100px)": {
      display: "none",
    },
  },
});
