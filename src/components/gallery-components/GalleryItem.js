import { color } from "framer-motion";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { colors } from "../../assets/colors";

export default function GalleryItem(props) {
  const classes = useStyles();
  const { photo } = props;
  const firstWord = photo.split(" ")[0];
  const [overlayStyle, setOverlayStyle] = useState({});

  return (
    <div className={classes.galleryItem}>
      <img
        className={classes.galleryPhoto}
        src={"./categories/" + firstWord + ".jpg"}
      />
    </div>
  );
}

const useStyles = createUseStyles({
  galleryItem: {
    width: "100%",
    borderRadius: "10px",
  },
  galleryPhoto: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
    boxShadow: "black 0 0 2px",

    transition: "transform 0.5s",

    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  photoOverlay: {
    width: "100%",
    position: "absolute",
    overflow: "hidden",
    borderRadius: "10px",
    height: "4rem",
    opacity: 0.8,
    backgroundColor: colors.black,

    "&:hover": {},
  },
});
