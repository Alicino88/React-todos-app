import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Login(props) {
  const [usernameIsValid, setUsernameIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  //the two below states are for the dynamic styling in case the inputs are not valid
  const [usernameisRed, setUsernameisRed] = useState(false);
  const [PasswordisRed, setPasswordisRed] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  const usernameChangeHandler = (e) => {
    setUsernameisRed(false);
    const username = e.target.value;
    if (username.length > 0) {
      setUsernameIsValid(true);
    } else {
      setUsernameIsValid(false);
    }
    setUsernameValue(username);
  };

  const passwordChangeHandler = (e) => {
    setPasswordisRed(false);
    const password = e.target.value;
    if (password.trim().length > 5) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
    setPasswordValue(password);
  };

  useEffect(() => {
    if (usernameIsValid && passwordIsValid) {
      setFormIsValid(true);
    } else if (!usernameIsValid || !passwordIsValid) {
      setFormIsValid(false);
    }
  }, [usernameValue, passwordValue, usernameIsValid, passwordIsValid]);
  const submit = (e) => {
    e.preventDefault();

    props.onLogin();
  };

  const emailStyleHandler = () => {
    if (!usernameIsValid) {
      setUsernameisRed(true);
    } else if (usernameIsValid) {
      setUsernameisRed(false);
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
      <Col md={6} lg={4} className="mx-auto pt-5">
        <Form className="mt-5 px-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter username"
              onChange={usernameChangeHandler}
              className={usernameisRed ? "border border-danger" : ""}
              onBlur={emailStyleHandler}
            />
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
            {PasswordisRed && (
              <Form.Text className="text-muted">
                Almost...Your password must be longer than 5 characters.
              </Form.Text>
            )}
          </Form.Group>

          <Button
            className="mt-3"
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
