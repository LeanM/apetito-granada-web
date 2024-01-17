import { useState, useEffect, Suspense, lazy } from "react";

import { useNavigate } from "react-router-dom";
import CategoryCarousel from "./carousel/CategoryCarousel";
import { colors } from "../../assets/colors";
import HomeInfo from "./landing/HomeInfo";
import BookSection from "./categoryCards/BookSection";
import { createUseStyles } from "react-jss";
import Reveal from "../animation/Reveal";
import Loader from "../loaders/Loader";
import Nav from "../pagewrappers/Nav";
import MenuModal from "./categoryCards/MenuModal";
import Footer from "../pagewrappers/Footer";
import HomeTopAlter from "./landing/HomeTopAlter";
import About from "./landing/About";
import InfoCarousel from "./infoCarousel/InfoCarousel";

const LeftCategoryCard = lazy(() => import("./categoryCards/LeftCategoryCard"));
const RightCategoryCard = lazy(() =>
  import("./categoryCards/RightCategoryCard")
);

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
      {
        categoryName: "ENSALADAS",
        categoryDescription: "Todo tipo de ensaladas",
        plates: [
          { name: "Ensalada Verde", description: "" },
          { name: "Ensalada de Col Americana", description: "" },
          { name: "Ensalada de Col Asiatica", description: "" },
          { name: "Ensalada César", description: "" },
          { name: "Ensalada de Cuscús", description: "" },
          { name: "Ensalada de Quinoa", description: "" },
          { name: "Tabouleh", description: "" },
          { name: "Ensalada Griega", description: "" },
          { name: "Zorongolia", description: "" },
          { name: "Vegetales asados en Aceite de Oliva", description: "" },
          { name: "Panzanella", description: "" },
          { name: "Ensalada de Chorizo con 5 frijoles", description: "" },
          { name: "Ensalada Caprese", description: "" },
          { name: "Kachumber", description: "" },
        ],
      },
      {
        categoryName: "PESCADOS BBQ & PARRILLA",
        categoryDescription: "Todo tipo de pescados a la barbacoa y parrilla",
        plates: [
          { name: "Filete de Salmón", description: "" },
          { name: "Filete de Atún", description: "" },
          { name: "Caballa", description: "" },
          { name: "Salmonete", description: "" },
          { name: "Mójol", description: "" },
          { name: "Langostinos", description: "" },
          { name: "Kebab de Mariscos", description: "" },
          { name: "Campanas de Calamares", description: "" },
        ],
      },
      {
        categoryName: "VEGETALES BBQ & PARRILLA",
        categoryDescription: "Vegetales para barbacoa y parrilla",
        plates: [
          { name: "Kebab de vegetales", description: "" },
          { name: "Patatas asadas", description: "" },
          { name: "Berenjena", description: "" },
          { name: "Espárragos", description: "" },
        ],
      },
      {
        categoryName: "MARINADOS",
        categoryDescription: "",
        plates: [
          { name: "Marinado de cerdo", description: "" },
          { name: "Marinado asiático", description: "" },
          { name: "Marinado chimichurri", description: "" },
          { name: "Marinado Tandoori", description: "" },
        ],
      },
      {
        categoryName: "SALSAS & ADEREZOS",
        categoryDescription: "",
        plates: [
          { name: "Salsa BBQ", description: "" },
          { name: "Salsa de Tomate", description: "" },
          { name: "Salsa de Hamburguesas", description: "" },
          { name: "Aderezo ranchero", description: "" },
          { name: "Aderezo de mostaza", description: "" },
          { name: "Aderezo de miel & mostaza", description: "" },
          { name: "Alioli", description: "" },
          { name: "Mayonesa", description: "" },
          { name: "Aderezo de queso azul", description: "" },
          { name: "Aderezo de sésamo asiático", description: "" },
          { name: "Mostaza inglesa", description: "" },
          { name: "Mostaza de Dijon", description: "" },
          { name: "Mostaza de grano grueso", description: "" },
          { name: "Glaseado balsámico", description: "" },
          { name: "Aderezo de cacahuete y lima", description: "" },
          { name: "Aderezo cítrico", description: "" },
          { name: "Salsa Romesco", description: "" },
        ],
      },
      {
        categoryName: "LISTOS PARA SERVIR",
        categoryDescription: "",
        plates: [
          { name: "Charcutería", description: "" },
          {
            name: "Plateau de Fruits de Mer { Frutas del Mar }",
            description: "",
          },
          { name: "Pescado curado", description: "" },
          { name: "Langostinos", description: "" },
          { name: "Cangrejo", description: "" },
          { name: "Gambos Pirri Pirri", description: "" },
          { name: "Mix vegetariano", description: "" },
        ],
      },
      {
        categoryName: "PANES",
        categoryDescription: "",
        plates: [
          { name: "Baguettes", description: "" },
          { name: "Pan de hamburguesa", description: "" },
          { name: "Pitta", description: "" },
          { name: "Ciabatta", description: "" },
          { name: "Crostini", description: "" },
          { name: "Panecillos sin gluten", description: "" },
        ],
      },
      {
        categoryName: "POSTRES",
        categoryDescription: "",
        plates: [
          { name: "Possets", description: "Diferentes sabores" },
          { name: "Tiramisu", description: "" },
          { name: "Pannacotta", description: "Flor de saúco" },
          { name: "Tarta de queso", description: "" },
          { name: "Mouse de chocolate", description: "" },
          {
            name: "Ensalada de fruta fresca",
            description: "Disponibilidad estacional",
          },
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
        <About />
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
                if (
                  categories.indexOf(category) !== 0 &&
                  categories.indexOf(category) % 3 === 0
                ) {
                  return (
                    <Suspense>
                      <Reveal
                        animationVariant="bottom"
                        styles={classes.resultItem}
                        key={categories.indexOf(category)}
                      >
                        <LeftCategoryCard
                          key={0}
                          categoryData={category}
                          onOpenMenu={(categoryData) =>
                            handleOpen(categoryData)
                          }
                        />
                        <BookSection key={1} />
                      </Reveal>
                    </Suspense>
                  );
                } else {
                  return (
                    <Suspense>
                      <Reveal
                        animationVariant="bottom"
                        styles={classes.resultItem}
                        key={categories.indexOf(category)}
                      >
                        <LeftCategoryCard
                          categoryData={category}
                          onOpenMenu={(categoryData) =>
                            handleOpen(categoryData)
                          }
                        />
                      </Reveal>
                    </Suspense>
                  );
                }
              } else {
                if (
                  categories.indexOf(category) !== 0 &&
                  categories.indexOf(category) % 3 === 0
                ) {
                  return (
                    <Suspense>
                      <Reveal
                        animationVariant="bottom"
                        styles={classes.resultItem}
                        key={categories.indexOf(category)}
                      >
                        <RightCategoryCard
                          categoryData={category}
                          onOpenMenu={(categoryData) =>
                            handleOpen(categoryData)
                          }
                        />
                        <BookSection />
                      </Reveal>
                    </Suspense>
                  );
                } else {
                  return (
                    <Suspense>
                      <Reveal
                        animationVariant="bottom"
                        styles={classes.resultItem}
                        key={categories.indexOf(category)}
                      >
                        <RightCategoryCard
                          categoryData={category}
                          onOpenMenu={(categoryData) =>
                            handleOpen(categoryData)
                          }
                        />
                      </Reveal>
                    </Suspense>
                  );
                }
              }
            })}
          </div>
        </div>
        <InfoCarousel />
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
