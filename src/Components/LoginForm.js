import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Login(props) {
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  //the two below states are for the dynamic styling in case the inputs are not valid
  const [emailisRed, setEmailisRed] = useState(false);
  const [PasswordisRed, setPasswordisRed] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEmailisRed(false);
    const email = e.target.value;
    console.log(email);
    if (email.includes("@")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
    setEmailValue(email);
  };

  const passwordChangeHandler = (e) => {
    setPasswordisRed(false);
    const password = e.target.value;
    if (password.trim().length >= 5) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
    setPasswordValue(password);
  };

  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      setFormIsValid(true);
    } else if (!emailIsValid || !passwordIsValid) {
      setFormIsValid(false);
    }
  }, [emailValue, passwordValue, emailIsValid, passwordIsValid]);
  const submit = (e) => {
    e.preventDefault();

    props.onLogin();
  };

  const emailStyleHandler = () => {
    if (!emailIsValid) {
      setEmailisRed(true);
    } else if (emailIsValid) {
      setEmailisRed(false);
    }
  };

  const passwordStyleHandler = () => {
    if (!passwordIsValid) {
      setPasswordisRed(true);
    } else if (passwordIsValid) {
      setPasswordisRed(false);
    }
  };
  return (
    <Container>
      <Col md={5} className="mx-auto">
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={emailChangeHandler}
              className={emailisRed ? "border border-danger" : ""}
              onBlur={emailStyleHandler}
            />
            <Form.Text className="text-muted">
              Your email should contain "@" character.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={passwordChangeHandler}
              onBlur={passwordStyleHandler}
              className={PasswordisRed ? "border border-danger" : ""}
            />
          </Form.Group>

          <Button
            onClick={submit}
            variant="primary"
            type="submit"
            disabled={!formIsValid}
          >
            <Link to="/mytodos" className="text-white text-decoration-none">
              Login
            </Link>
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

export default Login;
