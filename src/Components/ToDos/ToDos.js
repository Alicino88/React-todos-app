import ToDoForm from "./ToDoForm";
import ToDosContainer from "./ToDosContainer";
import ToDosFilter from "./ToDosFilter";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Container, Col } from "react-bootstrap";

function ToDos() {
  const [toDos, setToDos] = useState([]);
  //console.log(toDos);
  const addToDo = (newToDo) => {
    //console.log(newTitle);
    setToDos((previousToDos) => {
      return [...previousToDos, newToDo];
    });
  };
  return (
    <>
      <ToDoForm onAddToDos={addToDo} />
      {toDos.length === 0 && (
        <Container>
          <Col md={5} className="mx-auto mt-4">
            <Alert>There are not todos on your list yet</Alert>
          </Col>
        </Container>
      )}
      {toDos.length > 0 && <ToDosFilter />}
      <ToDosContainer myToDos={toDos} />
    </>
  );
}

export default ToDos;
