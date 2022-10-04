import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { Container, Col } from "react-bootstrap";

function ToDosFilter(props) {
  const filterCategory = (e) => {
    let category = e.target.value;
    //console.log(category);
    props.onChangeCategory(category);
  };
  return (
    <Container>
      <Col md={5} className="mx-auto mt-5">
        <Form>
          <Form.Group onChange={filterCategory}>
            <Form.Select value={props.currentCategory}>
              <option>All</option>
              <option>Hobby</option>
              <option>Family</option>
              <option>Work</option>
              <option>Study</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Col>
    </Container>
  );
}

/*  <Dropdown onClick={filterCategory}>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Select Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Hobby</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Family</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Work</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Study</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>*/

export default ToDosFilter;
