import Dropdown from "react-bootstrap/Dropdown";
import { Container, Col } from "react-bootstrap";

function ToDosFilter() {
  return (
    <Container>
      <Col md={5} className="mx-auto mt-5">
        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Select Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Hobby</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Family</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Work</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Study</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Container>
  );
}

export default ToDosFilter;
