import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import LeftCategoryCard from "./categoryCards/LeftCategoryCard";
import RightCategoryCard from "./categoryCards/RightCategoryCard";
import CategoryCarousel from "./carousel/CategoryCarousel";
import { colors } from "../../assets/colors";
import HomeTop from "./landing/HomeTop";
import ReviewCarousel from "./reviewCarousel/ReviewCarousel";
import HomeInfo from "./landing/HomeInfo";
import BookSection from "./categoryCards/BookSection";
import { createUseStyles } from "react-jss";
import Reveal from "../animation/Reveal";
import Loader from "../loaders/Loader";
import Nav from "../pagewrappers/Nav";
import { Modal } from "rsuite";
import MenuModal from "./categoryCards/MenuModal";

export default function Home(props) {
  const { loading } = props;

  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [categories, setCategories] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useStyles();

  useEffect(() => {
    loadPage();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    //getStartupData();
    getCategories();
  }, []);

  const loadPage = async () => {
    setTimeout(() => {
      props.onLoad();
    }, 2500);
  };

  const getStartupData = async () => {
    setTimeout(() => {}, 4000);
  };

  const getCategories = () => {
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

    setCategories(categoriasDeComida);
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <Nav />
      <MenuModal open={open} onClose={handleClose} />
      <div className={classes.container}>
        <HomeTop />

        <HomeInfo />
        <div className={classes.homeBody}>
          <div className={classes.categoryCarouselContainer}>
            <p className={classes.categoryCarouselText}>
              Observe nuestros distintos tipos de menus disponibles por nuestro
              servicio!
            </p>
            <CategoryCarousel categoriesData={categories} />
          </div>
          <div className={classes.resultsContainer}>
            {categories.map((category) => {
              if (categories.indexOf(category) % 2 === 0) {
                if (
                  categories.indexOf(category) !== 0 &&
                  categories.indexOf(category) % 3 === 0
                ) {
                  return (
                    <Reveal styles={classes.resultItem}>
                      <LeftCategoryCard
                        key={category}
                        categoryData={category}
                        onOpen={handleOpen}
                      />
                      <BookSection />
                    </Reveal>
                  );
                } else {
                  return (
                    <Reveal styles={classes.resultItem}>
                      <LeftCategoryCard
                        key={category}
                        categoryData={category}
                        onOpen={handleOpen}
                      />
                    </Reveal>
                  );
                }
              } else {
                if (
                  categories.indexOf(category) !== 0 &&
                  categories.indexOf(category) % 3 === 0
                ) {
                  return (
                    <Reveal styles={classes.resultItem}>
                      <RightCategoryCard
                        key={category}
                        categoryData={category}
                        onOpen={handleOpen}
                      />
                      <BookSection />
                    </Reveal>
                  );
                } else {
                  return (
                    <Reveal styles={classes.resultItem}>
                      <RightCategoryCard
                        key={category}
                        categoryData={category}
                        onOpen={handleOpen}
                      />
                    </Reveal>
                  );
                }
              }
            })}
          </div>
        </div>
        <div></div>
        <ReviewCarousel />
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "Poppins",
  },
  homeBody: {
    display: "flex",
    width: "100%",
    minHeight: "70vh",
    zIndex: "50",
    position: "relative",
    left: "0px",
    top: "60%",
    right: "0px",
    bottom: "0px",
    flexDirection: "column",
    backgroundColor: "white",
  },
  categoryCarouselContainer: {
    width: "100%",
    height: "10rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 50,
    gap: "2rem",
  },
  categoryCarouselText: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: colors.black,

    "@media screen and (max-width: 600px)": {
      fontSize: "1rem",
    },

    "@media screen and (max-width: 600px)": {
      fontSize: "0.8rem",
    },
  },
  resultsContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  resultItem: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
