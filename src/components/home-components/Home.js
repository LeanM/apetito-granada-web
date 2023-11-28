import { useState, useEffect } from "react";
import "../../css/home.css";
import { toast } from "react-hot-toast";
import LandingVideo from "./LandingVideo";
import { getPackages } from "../../connection/requests";
import { useNavigate } from "react-router-dom";
import asado from "../../assets/ASADO.jpg";
import LeftCategoryCard from "./categoryCards/LeftCategoryCard";
import RightCategoryCard from "./categoryCards/RightCategoryCard";
import CategoryCarousel from "./carousel/CategoryCarousel";
import { colors } from "../../assets/colors";
import HomeTop from "./landing/HomeTop";
import ReviewCarousel from "./reviewCarousel/ReviewCarousel";

export default function Home() {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getStartupData();
    getCategories();
  }, []);

  const getStartupData = async () => {
    getPackages()
      .then((response) => setPackages(response.data.data))
      .catch((error) => toast.error(error.message));
  };

  const getCategories = () => {
    const categoriasDeComida = [
      "CARNE",
      "PESCADO",
      "ENSALADAS",
      "PASTA",
      "PIZZA",
      "SUSHI",
    ];

    setCategories(categoriasDeComida);
  };

  return (
    <div className="home__section">
      <HomeTop />
      <div
        style={{
          zIndex: 50,
        }}
        className="home__body"
      >
        <div
          style={{
            width: "100%",
            height: "10rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 50,
            gap: "2rem",
          }}
        >
          <p>Elige entre nuestros distintos tipos de menu!</p>
          <CategoryCarousel categoriesData={categories} />
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {categories.map((category) => {
            if (categories.indexOf(category) % 2 === 0)
              return <LeftCategoryCard categoryData={category} />;
            else return <RightCategoryCard categoryData={category} />;
          })}
        </div>
        <div className="home__body__package-info">
          <div className="home__body__package-info__text">Our Package</div>
          {packages.length === 0 ? (
            <p></p>
          ) : (
            <button
              onClick={() => navigate("/checkout")}
              className="home__body__package-info__button"
            >
              Get ALL Prompts for ${packages[0].total_price}
            </button>
          )}
        </div>
      </div>

      <div className="home__contacts"></div>
      <ReviewCarousel />
    </div>
  );
}
