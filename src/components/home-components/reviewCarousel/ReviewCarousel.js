import { useEffect, useState } from "react";
import Slider from "react-slick";
import { createUseStyles } from "react-jss";
import Review from "./Review";

export default function ReviewCarousel() {
  const [reviews, setReviews] = useState([]);
  const classes = useStyles();
  const [slidesToShow, setSlidesToShow] = useState(5);

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
