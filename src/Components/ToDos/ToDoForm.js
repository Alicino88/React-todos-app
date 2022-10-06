import { Container, Form, Col, Button } from "react-bootstrap";
import { useState } from "react";

function ToDos(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("Hobby");

  const [titleIsValid, setTitleIsValid] = useState(true);
  const [dateIsValid, setDateIsValid] = useState(true);
  const [categoryIsValid, setCategoryIsValid] = useState(true);

  const titleChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setTitleIsValid(true);
    }
    setEnteredTitle(e.target.value);
  };

  const dateChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setDateIsValid(true);
    }
    setEnteredDate(e.target.value);
  };

  const categoryChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setCategoryIsValid(true);
    }
    setEnteredCategory(e.target.value);
    console.log(e.target.value);
  };

  const goalSubmitHandler = (e) => {
    e.preventDefault();
    if (enteredTitle.trim().length === 0) {
      setTitleIsValid(false);
      return;
    } else if (enteredDate.trim().length === 0) {
      setDateIsValid(false);
      return;
    } else if (enteredCategory.trim().length === 0) {
      setCategoryIsValid(false);
      return;
    }

    /*const enteredTitle = titleRef.current.value;
    const dueDate = dueDateRef.current.value;
    const enteredCathegory = categoryRef.current.value;
    //console.log(enteredTitle);
    // console.log(dueDate);
    //console.log(enteredCathegory);*/

    const newToDo = {
      title: enteredTitle,
      date: new Date(enteredDate),
      category: enteredCategory,
    };
    //console.log(newToDo);
    props.onAddToDos(newToDo);

    //form is cleared after submission:
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredCategory("");
  };
  return (
    <Container>
      <Col md={6} lg={5} className="mx-auto">
        <Form className="bg-light mt-5 p-5 rounded">
          <h3 className="mb-4">Add your tasks</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              onChange={titleChangeHandler}
              className={!titleIsValid ? "border border-danger" : ""}
              value={enteredTitle}
            />
            {!titleIsValid && (
              <Form.Text className="text-muted">
                You forgot to give a title to your task.
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Due date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter title"
              onChange={dateChangeHandler}
              className={!dateIsValid ? "border border-danger" : ""}
              value={enteredDate}
            />
            {!dateIsValid && (
              <Form.Text className="text-muted">
                What is the deadline for this task?
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category</Form.Label>
            <Form.Select
              placeholder="select category"
              onChange={categoryChangeHandler}
              className={!categoryIsValid ? "border border-danger" : ""}
            >
              <option>Hobby</option>
              <option>Family</option>
              <option>Work</option>
              <option>Study</option>
            </Form.Select>
          </Form.Group>
          <Button className="mt-3 px-4" onClick={goalSubmitHandler}>
            Add
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

export default ToDos;
