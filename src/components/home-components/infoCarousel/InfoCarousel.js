import { useEffect, useState } from "react";
import Slider from "react-slick";
import { createUseStyles } from "react-jss";
import { colors } from "../../../assets/colors";
import InfoItem from "./InfoItem";

export default function InfoCarousel() {
  const [infoItems, setInfoItems] = useState([]);
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const classes = useStyles();
  const [slidesToShow, setSlidesToShow] = useState(2);

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
    else if (viewportSize.width < 800) setSlidesToShow(1);
    else setSlidesToShow(2);
  }, [viewportSize]);

  useEffect(() => {
    setInfoItems([
      //"Nuestros productos de carne y pescado están envasados al vacío para su frescura y listos para cocinar.",
      "Los platos están listos para su comodidad y listos para servir.",
      "Las ensaladas se entregan frescas en envases re-utilizables, para ser decantadas por el cliente.",
      "Los postres se pueden suministrar en porciones individuales o en porciones múltiples.",
      //"Cualquier requisito dietético especial se suministrará individualmente y se etiquetará con los ingredientes.",
      //"Se requiere un depósito del 50% al realizar un pedido. Cantidad restante pendiente debido a la entrega",
      //"La cancelación y el reembolso solo se permiten antes de las 72 horas de servicio.",
      //"La experiencia de chef está disponible previa solicitud. Requiere depósito previo del 50%.",
      //"La entrega se cobrará por kilómetro desde nuestra unidad de cocina.",
      "Nuestros platos proporcionarán instrucciones para almacenar, recalentar, cocinar y servir correctamente.",
      "El personal encargado de preparar alimentos debe conocer los requisitos de seguridad alimentaria, garantizando seguridad.",
      "Se puede verificar la calidad de nuestros proveedores de productos, garantizando su origen local.",
    ]);
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 5000,
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
        autoplaySpeed={7000}
        draggable={false}
      >
        {infoItems.map((item) => {
          return <InfoItem data={item}></InfoItem>;
        })}
      </Slider>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "1.8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: "0px",
    zIndex: "1000",
    backgroundColor: "white",
    borderTop: `solid ${colors.grey} 1px`,
  },
  slider: {
    width: "95%",
    height: "100%",
  },
});
