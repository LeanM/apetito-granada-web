import { createUseStyles } from "react-jss";
import React, { useEffect, useRef, useState } from "react";
import { Form, ButtonToolbar, Button, Input } from "rsuite";
import { Steps } from "rsuite";
import AlterNav from "../pagewrappers/AlterNav";

export default function Contact() {
  const classes = useStyles();
  const [step, setStep] = useState(1);
  const [errMsg, setErrMsg] = useState("");

  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [people, setPeople] = useState(0);
  const [extraInfo, setExtraInfo] = useState("");

  const Textarea = React.forwardRef((props, ref) => (
    <Input {...props} as="textarea" ref={ref} />
  ));
  const formRef = useRef(null);

  const styles = {
    width: "200px",
    display: "inline-table",
    verticalAlign: "top",
  };

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <>
      <AlterNav />
      <div className={classes.container}>
        <div className={classes.dataContainer}>
          <form className={classes.form}>
            <label className="login-register__label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <label className="login-register__label" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label className="login-register__label" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEventDate(e.target.value)}
              value={eventDate}
              required
            />
            <label className="login-register__label" htmlFor="time">
              Time
            </label>
            <input
              type="time"
              id="time"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEventTime(e.target.value)}
              value={eventTime}
              required
            />
            <label className="login-register__label" htmlFor="people">
              People
            </label>
            <input
              type="number"
              id="people"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setPeople(e.target.value)}
              value={people}
              required
            />
          </form>
          <Form
            ref={formRef}
            className={classes.form}
            onCheck={() => setStep(2)}
          >
            <Form.Group controlId="name">
              <Form.ControlLabel>Your Name</Form.ControlLabel>
              <Form.Control name="name" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.ControlLabel>Email</Form.ControlLabel>
              <Form.Control name="email" type="email" />
              <Form.HelpText tooltip>Email is required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel>Event Date</Form.ControlLabel>
              <Form.Control name="date" type="date" autoComplete="off" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel>Event Time</Form.ControlLabel>
              <Form.Control name="time" type="time" autoComplete="on" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.ControlLabel>Event Number of People</Form.ControlLabel>
              <Form.Control name="people" type="number" autoComplete="on" />
            </Form.Group>
            <Form.Group controlId="textarea">
              <Form.ControlLabel>Extra info</Form.ControlLabel>
              <Form.Control
                rows={5}
                name="textarea"
                accepter={Textarea}
                placeholder="Talk about something you want to know"
              />
            </Form.Group>
            <Form.Group>
              <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
                <Button appearance="default">Cancel</Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
          <div>
            <Steps current={step} vertical style={styles}>
              <Steps.Item
                title="Choose desired Menues"
                description="Choosed wanted menus"
              />
              <Steps.Item
                title="Complete your data"
                description="Description"
              />
              <Steps.Item title="Submit your book" description="Description" />
            </Steps>
          </div>
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
