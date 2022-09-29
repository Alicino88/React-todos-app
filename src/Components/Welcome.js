import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";

function Welcome() {
  return (
    <Container>
      <Col md={9} className="mt-5">
        <h1>Hi there! Click on the login button ans start adding your todos</h1>
      </Col>
    </Container>
  );
}

export default Welcome;

/*
className=" w-75"
*/
