import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";

function Welcome() {
  return (
    <Container>
      <Col md={9} className="mt-5 pt-5">
        <h1 className="fw-bold">Hi there!</h1>
        <h1> Click on the login button and start adding your todos</h1>
      </Col>
    </Container>
  );
}

export default Welcome;

/*
className=" w-75"
*/
