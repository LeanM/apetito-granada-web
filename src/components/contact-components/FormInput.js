import { useEffect, useState } from "react";
import "./formInput.css";
import { createUseStyles } from "react-jss";
import { colors } from "../../assets/colors";

export default function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [style, setStyle] = useState({});
  const [lines, setLines] = useState(1);
  const classes = useStyles();

  const handleFocus = (e) => {
    setFocused(false);
  };

  useEffect(() => {
    console.log(label);
    if (label === "Description") {
      setLines(3);
      setStyle(biggerInput);
    } else setStyle(normalInput);
  }, []);

  const biggerInput = {
    height: "3rem",
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
        rows={lines}
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
    width: "80%",

    borderRadius: 0,
  },
  input: {
    margin: "5px 2px",
    width: "100%",
    borderRadius: 0,
    outline: "none",
    border: "none",
    borderBottom: `solid 1px ${colors.grey}`,
  },
  label: {
    fontSize: "1.1rem",
    fontWeight: "400",
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
