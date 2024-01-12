import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import LeftCategoryCard from "./categoryCards/LeftCategoryCard";
import RightCategoryCard from "./categoryCards/RightCategoryCard";
import CategoryCarousel from "./carousel/CategoryCarousel";
import { colors } from "../../assets/colors";
import ReviewCarousel from "./reviewCarousel/ReviewCarousel";
import HomeInfo from "./landing/HomeInfo";
import BookSection from "./categoryCards/BookSection";
import { createUseStyles } from "react-jss";
import Reveal from "../animation/Reveal";
import Loader from "../loaders/Loader";
import Nav from "../pagewrappers/Nav";
import MenuModal from "./categoryCards/MenuModal";
import Footer from "../pagewrappers/Footer";
import HomeTopAlter from "./landing/HomeTopAlter";

export default function Home(props) {
  const { loading } = props;

  const [categories, setCategories] = useState([]);

  const [actualMenu, setActualMenu] = useState({
    categoryName: "",
    categoryDescription: "",
    plates: [],
  });
  const [open, setOpen] = useState(false);
  const handleOpen = (categoryData) => {
    setActualMenu(categoryData);
    setOpen(true);
  };
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
      {
        categoryName: "MEZE & SALSAS",
        categoryDescription: "Salsas para tus comidas",
        plates: [
          { name: "Aceitunas", description: "" },
          { name: "Aceite de Oliva", description: "" },
          { name: "Hummus", description: "Garbanzos" },
          { name: "Guacamole", description: "Aguacate" },
          { name: "Salsa", description: "Tomate" },
          { name: "Ensaladilla Rusa", description: "" },
          { name: "Ensalada de Marisco", description: "" },
          { name: "Ensalada de Mango", description: "" },
          { name: "Ensalada de Cangrejo", description: "" },
          { name: "Apple Machengo", description: "Manzana y queso" },
          { name: "Baba Ganoush", description: "Berenjena asada" },
          { name: "Casik", description: "Yoghurt & Pepino" },
          { name: "Kisir", description: "Trigo hervido" },
          { name: "Patates Salatasi", description: "Patatas y Huevos" },
          { name: "Piyaz", description: "Cebollas y Tomates" },
          {
            name: "Saksuka",
            description: "Huevos, Tomates, Pimientos y Cebollas",
          },
        ],
      },
      {
        categoryName: "CARNES BBQ & PARRILLA",
        categoryDescription: "Todo tipo de carnes a la barbacoa y parrilla",
        plates: [
          { name: "Hamburguesas 4oz", description: "100% Ternera" },
          { name: "Costillas de Cerdo", description: "6 o 12 unidades" },
          { name: "Chuletas de Cerdo", description: "280 gramos" },
          { name: "Filete de Ternera", description: "170 gramos" },
          { name: "Chuletas de Cerdo", description: "Individual" },
          { name: "Salchichas", description: "Por kilogramo" },
          { name: "Kebab de Ternera", description: "" },
          { name: "Kebab de Pollo", description: "" },
          { name: "Filetes de Pollo", description: "170 gramos" },
        ],
      },
    ];

    setCategories(categoriasDeComida);
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <Nav />
      <MenuModal data={actualMenu} open={open} onClose={handleClose} />
      <div className={classes.container}>
        <HomeTopAlter />

        <HomeInfo />
        <div className={classes.homeBody}>
          <div className={classes.categoryCarouselContainer}>
            <p className={classes.categoryCarouselText}>
              Observe nuestros distintos tipos de menus disponibles!
            </p>
            <CategoryCarousel categoriesData={categories} />
          </div>
          <div className={classes.resultsContainer}>
            {categories.map((category) => {
              if (categories.indexOf(category) % 2 === 0) {
                console.log("asd");
                if (
                  categories.indexOf(category) !== 0 &&
                  categories.indexOf(category) % 3 === 0
                ) {
                  return (
                    <Reveal
                      animationVariant="bottom"
                      styles={classes.resultItem}
                    >
                      <LeftCategoryCard
                        key={category}
                        categoryData={category}
                        onOpenMenu={(categoryData) => handleOpen(categoryData)}
                      />
                      <BookSection />
                    </Reveal>
                  );
                } else {
                  return (
                    <Reveal
                      animationVariant="bottom"
                      styles={classes.resultItem}
                    >
                      <LeftCategoryCard
                        key={category}
                        categoryData={category}
                        onOpenMenu={(categoryData) => handleOpen(categoryData)}
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
                    <Reveal
                      animationVariant="bottom"
                      styles={classes.resultItem}
                    >
                      <RightCategoryCard
                        key={category}
                        categoryData={category}
                        onOpenMenu={(categoryData) => handleOpen(categoryData)}
                      />
                      <BookSection />
                    </Reveal>
                  );
                } else {
                  return (
                    <Reveal
                      animationVariant="bottom"
                      styles={classes.resultItem}
                    >
                      <RightCategoryCard
                        key={category}
                        categoryData={category}
                        onOpenMenu={(categoryData) => handleOpen(categoryData)}
                      />
                    </Reveal>
                  );
                }
              }
            })}
          </div>
        </div>
        <ReviewCarousel />
      </div>
      <Footer />
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
    fontSize: "1rem",
    color: colors.nav,

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
