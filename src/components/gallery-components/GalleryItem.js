import { color } from "framer-motion";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { colors } from "../../assets/colors";

export default function GalleryItem(props) {
  const classes = useStyles();
  const { photo } = props;
  const firstWord = photo.split(" ")[0];
  const [overlayStyle, setOverlayStyle] = useState({ opacity: 0 });

  const overlayHover = {
    height: "3.5rem",
    opacity: 0.7,
  };

  return (
    <div
      className={classes.galleryItem}
      onMouseOver={() => setOverlayStyle(overlayHover)}
      onMouseOut={() => setOverlayStyle({ opacity: 0 })}
    >
      <img
        className={classes.galleryPhoto}
        src={"./categories/" + firstWord + ".jpg"}
      />
      <div className={classes.photoOverlay} style={overlayStyle}>
        <p>{photo}</p>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  galleryItem: {
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "black 0 0 2px",
  },
  galleryPhoto: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",

    zIndex: "100",

    transition: "transform 0.5s",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  photoOverlay: {
    width: "100%",
    height: "0",
    position: "absolute",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",

    fontWeight: "200",

    color: colors.white,

    bottom: 0,
    right: 0,
    zIndex: "50",

    backgroundColor: colors.black,

    transition: "height 0.5s, opacity 0.5s",

    "&:hover": {
      opacity: 1,
    },
  },
});
