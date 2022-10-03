import { Container, Form, Col, Button } from "react-bootstrap";
import { useRef } from "react";

function ToDos(props) {
  const titleRef = useRef();
  const dueDateRef = useRef();
  const categoryRef = useRef();

  const goalSubmitHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleRef.current.value;
    const dueDate = dueDateRef.current.value;
    const enteredCathegory = categoryRef.current.value;
    //console.log(enteredTitle);
    // console.log(dueDate);
    //console.log(enteredCathegory);

    const newToDo = {
      title: enteredTitle,
      date: new Date(dueDate),
      category: enteredCathegory,
    };
    console.log(newToDo);
    props.onAddToDos(newToDo);

    //form is cleared after submission:
    titleRef.current.value = "";
    dueDateRef.current.value = "";
    categoryRef.current.value = "";
  };
  return (
    <Container>
      <Col md={5} className="mx-auto">
        <Form className="bg-light mt-5 p-5">
          <h2>Add a task</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              ref={titleRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Due date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter title"
              ref={dueDateRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category</Form.Label>
            <Form.Select placeholder="select category" ref={categoryRef}>
              <option>Hobby</option>
              <option>Family</option>
              <option>Work</option>
              <option>Study</option>
            </Form.Select>
          </Form.Group>
          <Button onClick={goalSubmitHandler}>Add</Button>
        </Form>
      </Col>
    </Container>
  );
}

export default ToDos;
