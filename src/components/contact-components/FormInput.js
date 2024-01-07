import { useEffect, useState } from "react";
import "./formInput.css";
import { createUseStyles } from "react-jss";
import { colors } from "../../assets/colors";

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
    borderRadius: 0,
  };

  const normalInput = {
    height: "3rem",
    borderRadius: 0,
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
    alignItems: "flex-start",
    width: "30rem",
    borderRadius: 0,

    "@media screen and (max-width: 500px)": {
      //width: "14rem",
    },
  },
  input: {
    padding: "15px",
    margin: "5px 0px",
    width: "100%",
    borderRadius: 0,
    border: `solid 1px ${colors.black}`,

    "@media screen and (max-width: 1000px)": {
      width: "100%",
    },
  },
  label: {
    fontSize: "0.9rem",
    color: colors.black,
  },
  span: {
    fontSize: "0px",
    width: "15rem",
    padding: "3px",
    color: "red",
    position: "absolute",
    marginTop: "5.5%",
    display: "none",
  },
});
