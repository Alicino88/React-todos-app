import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Login(props) {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (e) => {
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
              className={!emailIsValid ? "border border-danger" : ""}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={passwordChangeHandler}
              className={!passwordIsValid ? "border border-danger" : ""}
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
