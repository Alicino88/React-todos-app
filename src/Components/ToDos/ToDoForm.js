import { Container, Form, Col, Button } from "react-bootstrap";
import { useRef } from "react";

function ToDos() {
  return (
    <Container>
      <Col md={5} className="mx-auto">
        <Form className="bg-light mt-5 p-5">
          <h2>Add a task</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Due date</Form.Label>
            <Form.Control type="date" placeholder="Enter title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category</Form.Label>
            <Form.Select placeholder="select category">
              <option>Hobby</option>
              <option>Family</option>
              <option>Work</option>
              <option>Study</option>
            </Form.Select>
          </Form.Group>
          <Button>Add</Button>
        </Form>
      </Col>
    </Container>
  );
}

export default ToDos;
