import { createUseStyles } from "react-jss";
import { colors } from "../../assets/colors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GalleryItem from "./GalleryItem";

export default function Gallery() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const [firstColumn, setFirstColumn] = useState([]);
  const [secondColumn, setSecondColumn] = useState([]);
  const [thirdColumn, setThirdColumn] = useState([]);
  const [fourthColumn, setFourthColumn] = useState([]);

  useEffect(() => {
    obtainPhotos();
  }, []);

  useEffect(() => {
    fillColumns();
  }, [photos]);

  const fillColumns = () => {
    let auxFirstColumn = [];
    let auxSecondColumn = [];
    let auxThirdColumn = [];
    let auxFourthColumn = [];

    let index = 0;
    photos.forEach((photo) => {
      let position = index % 4;
      index = index + 1;

      if (position === 0) {
        auxFirstColumn.push(photo);
      }

      if (position === 1) {
        auxSecondColumn.push(photo);
      }

      if (position === 2) {
        auxThirdColumn.push(photo);
      }

      if (position === 3) {
        auxFourthColumn.push(photo);
      }
    });

    setFirstColumn(auxFirstColumn);
    setSecondColumn(auxSecondColumn);
    setThirdColumn(auxThirdColumn);
    setFourthColumn(auxFourthColumn);
  };

  const obtainPhotos = () => {
    const categoriasDeComida = [
      "MEZE & SALSAS",
      "CARNES BBQ & PARRILLA",
      "ENSALADAS",
      "PESCADOS BBQ & PARRILLA",
      "VEGETALES BBQ & PARRILLA",
      "LISTOS PARA SERVIR",
      "POSTRES",
      "PANES",
      "BEBIDAS",
      "SALSAS Y ADEREZOS",
      "MARINADOS",
    ];

    setPhotos(categoriasDeComida);
  };

  return (
    <div className={classes.container}>
      <div className={classes.backContainer}>
        <button className={classes.backButton} onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
      <div className={classes.galleryContainer}>
        <div className={classes.galleryColumn}>
          {firstColumn.map((photo) => {
            return <GalleryItem photo={photo} />;
          })}
        </div>
        <div className={classes.galleryColumn}>
          {secondColumn.map((photo) => {
            return <GalleryItem photo={photo} />;
          })}
        </div>
        <div className={classes.galleryColumn}>
          {thirdColumn.map((photo) => {
            return <GalleryItem photo={photo} />;
          })}
        </div>
        <div className={classes.galleryColumn}>
          {fourthColumn.map((photo) => {
            return <GalleryItem photo={photo} />;
          })}
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    minHeight: "150vh",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.textNav,
  },
  backContainer: {
    width: "100%",
    height: "6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  backButton: {
    width: "15rem",
    height: "2.5rem",
    borderRadius: "10px",
    backgroundColor: colors.textNav,
    border: `1px solid ${colors.nav}`,
    color: colors.nav,
    fontWeight: "800",

    transition: "background 0.5s, border 0.5s, color 0.5s",

    "&:hover": {
      backgroundColor: colors.nav,
      border: `1px solid ${colors.navLight}`,
      color: colors.white,
    },
  },
  galleryContainer: {
    width: "90%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "1rem",
  },
  galleryColumn: {
    width: "23%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "1rem",
  },
  galleryPhoto: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
    boxShadow: "black 0 0 2px",
  },
});
