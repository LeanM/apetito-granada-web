import { useEffect, useState } from "react";
import Slider from "react-slick";
import { createUseStyles } from "react-jss";
import Review from "./Review";

export default function ReviewCarousel() {
  const [reviews, setReviews] = useState([]);
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const classes = useStyles();
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Agregar un event listener para manejar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (viewportSize.width < 400) setSlidesToShow(1);
    else if (viewportSize.width < 800) setSlidesToShow(3);
    else setSlidesToShow(5);
  }, [viewportSize]);

  useEffect(() => {
    setReviews([
      "hola",
      "chau",
      "hola",
      "chau",
      "hola",
      "chau",
      "hola",
      "chau",
      "hola",
      "chau",
    ]);
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.container}>
      <Slider
        className={classes.slider}
        {...settings}
        arrows={false}
        autoplay={true}
        autoplaySpeed={3000}
        draggable={false}
      >
        {reviews.map((review) => {
          return <Review categoryName={review}></Review>;
        })}
      </Slider>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    position: "fixed",
    bottom: "0px",
    zIndex: "1000",
    backgroundColor: "white",
    borderTop: "solid black 1px",
  },
  slider: {
    width: "90%",
  },
});
