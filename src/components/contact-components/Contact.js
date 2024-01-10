import { createUseStyles } from "react-jss";
import React, { useEffect, useRef, useState } from "react";
import AlterNav from "../pagewrappers/AlterNav";
import FormInput from "./FormInput";
import { MDBIcon } from "mdb-react-ui-kit";
import { colors } from "../../assets/colors";
import ProgressBar from "@ramonak/react-progress-bar";
import { Button } from "rsuite";
import MenuList from "./MenuList";
import Footer from "../pagewrappers/Footer";

export default function Contact() {
  const formRef = useRef(null);
  const [completion, setCompletion] = useState(0);
  const [values, setValues] = useState({
    name: "",
    email: "",
    date: "",
    people: "",
    description: "",
  });
  const classes = useStyles();
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Your name",
      errorMessage:
        "Your name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "/^[a-z ,.'-]+$/i",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "date",
      type: "date",
      placeholder: "Select Event Date",
      label: "Event Date",
      required: true,
    },

    {
      id: 4,
      name: "people",
      type: "text",
      placeholder: "Specify aproximated number of people",
      label: "People Number",
      required: true,
    },
    {
      id: 5,
      name: "description",
      type: "text",
      placeholder: "Anything you want to say...",
      label: "Description",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    verifyStep();
  }, [values]);

  const verifyStep = () => {
    let newCompletion = 0;
    if (values.name !== "") newCompletion += 25;
    if (values.email !== "") newCompletion += 25;
    if (values.date !== "") newCompletion += 25;
    if (values.people !== "") newCompletion += 25;

    setCompletion(newCompletion);
  };

  return (
    <>
      <AlterNav />
      <div className={classes.container}>
        <div className={classes.subContainer}>
          <div
            className={classes.imageContainer}
            style={{
              backgroundImage: `url(./contact.jpg)`,
            }}
          ></div>
          <div className={classes.dataContainer}>
            <div
              style={{
                width: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className={classes.title}>Book Now!</h1>
            </div>
            <form
              className={classes.form}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className={classes.inputsContainer}>
                <FormInput
                  key={inputs[0].id}
                  {...inputs[0]}
                  value={values[inputs[0]]}
                  onChange={onChange}
                />
                <FormInput
                  key={inputs[1].id}
                  {...inputs[1]}
                  value={values[inputs[1]]}
                  onChange={onChange}
                />

                <FormInput
                  key={inputs[2].id}
                  {...inputs[2]}
                  value={values[inputs[2]]}
                  onChange={onChange}
                />
                <FormInput
                  key={inputs[3].id}
                  {...inputs[3]}
                  value={values[inputs[3]]}
                  onChange={onChange}
                />

                <FormInput
                  key={inputs[4].id}
                  {...inputs[4]}
                  value={values[inputs[4]]}
                  onChange={onChange}
                />
              </div>
              <div className={classes.progessContainer}>
                <ProgressBar
                  className={classes.progressBar}
                  bgColor={colors.nav}
                  baseBgColor="gray"
                  height="0.5rem"
                  labelColor={colors.nav}
                  completed={completion}
                  maxCompleted={100}
                  transitionDuration="0.5s"
                />
                <p style={{ fontWeight: "800", color: colors.nav }}>
                  {completion}%
                </p>
              </div>
              <div className={classes.interestMenusContainter}>
                <span>Tus menus de interes</span>
                <MenuList />
              </div>
              <button className={classes.submitButton}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "200vh",
    backgroundColor: "white",
    display: "flex",
    fontFamily: "Poppins",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5rem",
  },
  subContainer: {
    width: "95%",
    height: "85%",
    display: "flex",
    justifyContent: "center",
    border: `solid 2px ${colors.nav}`,
    borderRadius: "20px",
    alignItems: "center",
    marginTop: "5rem",
    overflow: "hidden",

    "@media screen and (max-width: 1100px)": {
      borderLeft: `solid 20px ${colors.nav}`,
    },
  },
  imageContainer: {
    width: "50%",
    height: "100%",
    backgroundColor: "black",
    backgroundSize: "cover",
    borderLeft: `solid 20px ${colors.nav}`,

    "@media screen and (max-width: 1100px)": {
      display: "none",
    },
  },
  dataContainer: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    alignItems: "center",

    "@media screen and (max-width: 1100px)": {
      width: "80%",
      paddingRight: "20px",
    },
  },
  title: {
    color: colors.nav,
    fontSize: "3rem",
    "@media screen and (max-width: 700px)": {
      fontSize: "2.2rem",
    },
  },
  form: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  },
  inputsContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "70%",
    gap: "0.2rem",
  },
  firstInputRow: {
    width: "90%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",

    "@media screen and (max-width: 1000px)": {
      flexDirection: "column",
      gap: "0.5rem",
    },
  },
  interestMenusContainter: {
    width: "20rem",
    height: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  submitButton: {
    width: "8rem",
    height: "4rem",
    borderRadius: "20px",
    fontWeight: "400",

    border: `solid 1px ${colors.navLight}`,

    backgroundColor: colors.nav,
    color: colors.textNav,

    transition: "background 0.3s, color 0.3s",

    "&:hover": {
      backgroundColor: colors.textNav,
      color: colors.nav,
    },
  },
  progessContainer: {
    width: "80%",
    height: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
  },
  progressBar: {
    width: "70%",
    height: "100%",

    "@media screen and (max-width: 800px)": {
      width: "90%",
    },
  },
});
