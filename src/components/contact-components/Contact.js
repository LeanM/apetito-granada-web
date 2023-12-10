import { createUseStyles } from "react-jss";
import React, { useEffect, useRef, useState } from "react";
import { Form, ButtonToolbar, Button, Input } from "rsuite";
import { Steps } from "rsuite";
import AlterNav from "../pagewrappers/AlterNav";
import FormInput from "./FormInput";

export default function Contact() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
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
      name: "time",
      type: "time",
      placeholder: "Select Event Time",
      label: "Event Time",
    },
    {
      id: 5,
      name: "description",
      type: "text",
      placeholder: "Anything you want to say...",
      label: "Description",
    },
  ];

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
    let step = 0;
    if (values.name !== "") step += 1;
    if (values.email !== "") step += 1;
    if (values.date !== "") step += 1;
    if (values.time !== "") step += 1;

    setStep(step);
  };

  return (
    <>
      <AlterNav />
      <div className={classes.container}>
        <div className={classes.dataContainer}>
          <form onSubmit={handleSubmit}>
            <h1>Contact us!</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Submit</button>
          </form>
          <Steps current={step} vertical>
            <Steps.Item
              title="Choose desired Menues"
              description="Choosed wanted menus"
            />
            <Steps.Item title="Complete your data" description="Description" />
            <Steps.Item title="Submit your book" description="Description" />
            <Steps.Item title="Submit your book" description="Description" />
            <Steps.Item title="Submit your book" description="Description" />
          </Steps>
        </div>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "150vh",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
  },
  dataContainer: {
    width: "80%",
    height: "80%",
    borderRadius: "20px",
    border: `dotted 1px grey`,
    display: "flex",
    justifyContent: "center",
    gap: "8rem",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
});
