import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login(props) {
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
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button onClick={submit} variant="primary" type="submit">
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
