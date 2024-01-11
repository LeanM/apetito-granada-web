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
        <div
          className={classes.subContainer}
          style={{
            backgroundImage: `url(./contactImage.jpg)`,
            backgroundSize: "cover",
          }}
        >
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
              <div className={classes.inputsRow}>
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
                </div>
                <div className={classes.inputsContainer}>
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
              </div>

              <button className={classes.submitButton}>Submit</button>
            </form>
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.interestMenusContainter}>
              <span style={{ color: colors.textNav }}>
                Tus menus de interes
              </span>
              <MenuList />
            </div>
            <div className={classes.progessContainer}>
              <p style={{ fontWeight: "400", color: colors.textNav }}>
                Information required completion
              </p>
              <ProgressBar
                className={classes.progressBar}
                bgColor={colors.textNav}
                baseBgColor={colors.secondary}
                height="0.5rem"
                labelColor={colors.textNav}
                completed={completion}
                maxCompleted={100}
                transitionDuration="0.5s"
              />
              <p style={{ fontWeight: "800", color: colors.textNav }}>
                {completion}%
              </p>
            </div>
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
    height: "140vh",
    backgroundColor: colors.textNav,
    //background: `linear-gradient(${colors.navSecondary},${colors.textNav})`,
    display: "flex",
    fontFamily: "Poppins",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10rem",
  },
  subContainer: {
    width: "95%",
    height: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",

    "@media screen and (max-width: 1100px)": {
      borderLeft: `solid 20px ${colors.nav}`,
    },
  },
  dataContainer: {
    width: "65%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: "20px 0px 0px 20px",
    boxShadow: "0 0 2px black",

    alignItems: "center",

    "@media screen and (max-width: 1100px)": {
      width: "80%",
      paddingRight: "20px",
    },
  },
  infoContainer: {
    width: "30%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.nav,
    gap: "2rem",
  },
  title: {
    color: colors.nav,
    fontSize: "3rem",
    marginTop: "1rem",
    "@media screen and (max-width: 700px)": {
      fontSize: "2.2rem",
    },
  },
  form: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  inputsRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "70%",
    gap: "0.2rem",
  },
  inputsContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "45%",
    height: "70%",
    gap: "0.2rem",
  },
  interestMenusContainter: {
    width: "95%",
    height: "15rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  submitButton: {
    width: "8rem",
    height: "3rem",
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
    height: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  progressBar: {
    width: "70%",
    height: "100%",

    "@media screen and (max-width: 800px)": {
      width: "90%",
    },
  },
});
