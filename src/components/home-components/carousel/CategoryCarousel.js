import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Item from "./Item";
import Carousel from "react-multi-carousel";
import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";
import styled from "@emotion/styled";

export default function CategoryCarousel(props) {
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [draggable, setDraggable] = useState(false);

  const sliderRef = useRef(null);
  const classes = useStyles();

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
    if (viewportSize.width < 500) setSlidesToShow(2);
    else if (viewportSize.width < 800) setSlidesToShow(2);
    else if (viewportSize.width < 1100) setSlidesToShow(3);
    else setSlidesToShow(4);

    if (viewportSize.width < 800) setDraggable(true);

    console.log(viewportSize);
  }, [viewportSize]);

  let settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.container}>
      <button
        className={classes.button}
        onClick={() => sliderRef.current.slickPrev()}
      >
        ❮
      </button>
      <Slider
        className={classes.slider}
        ref={sliderRef}
        {...settings}
        arrows={false}
        swipeToSlide={true}
        draggable={draggable}
      >
        {props.categoriesData.map((category) => {
          return <Item key={category} categoryName={category}></Item>;
        })}
      </Slider>
      <button
        className={classes.button}
        onClick={() => sliderRef.current.slickNext()}
      >
        ❯
      </button>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
  slider: {
    width: "80%",
  },
  button: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    textAlign: "center",
    transition: "background 0.5s ease-in-out, color 0.5s",

    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
});
