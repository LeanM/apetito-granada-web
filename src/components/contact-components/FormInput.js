import { useEffect, useState } from "react";
import "./formInput.css";
import { createUseStyles } from "react-jss";

export default function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [style, setStyle] = useState({});
  const classes = useStyles();

  const handleFocus = (e) => {
    setFocused(true);
  };

  useEffect(() => {
    console.log(label);
    if (label === "Description") {
      setStyle(biggerInput);
    } else setStyle(normalInput);
  }, []);

  const biggerInput = {
    height: "5rem",
  };

  const normalInput = {
    height: "3rem",
  };

  return (
    <div className={classes.container}>
      <label className={classes.label}>{label}</label>
      <input
        className={classes.input}
        {...inputProps}
        style={style}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className={classes.span}>{errorMessage}</span>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "18rem",

    "@media screen and (max-width: 500px)": {
      width: "14rem",
    },
  },
  input: {
    padding: "15px",
    margin: "10px 0px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid gray",

    "@media screen and (max-width: 1000px)": {
      width: "100%",
    },
  },
  label: {
    fontSize: "12px",
    color: "gray",
  },
  span: {
    fontSize: "12px",
    width: "15rem",
    padding: "3px",
    color: "red",
    position: "absolute",
    marginTop: "5.5%",
    display: "none",
  },
});
