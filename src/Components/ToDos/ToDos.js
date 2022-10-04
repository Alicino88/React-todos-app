import ToDoForm from "./ToDoForm";
import ToDosContainer from "./ToDosContainer";
import ToDosFilter from "./ToDosFilter";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Container, Col } from "react-bootstrap";

function ToDos() {
  const [toDos, setToDos] = useState([]);
  const [clickedCategory, setclickedCategory] = useState("All");

  const addToDo = (newToDo) => {
    setToDos((previousToDos) => {
      return [...previousToDos, newToDo];
    });
  };

  /*selectedCategory arives from ToDosFilter component */
  const categoryHandler = (selectedCategory) => {
    setclickedCategory(selectedCategory);
  };

  /*below I create new array containing todos of the selected hobby 
  const filteredToDos = toDos.filter((toDo) => {
    return toDo.category === clickedCategory;
  });*/

  const filteredToDos = toDos.filter((toDo) => {
    if (clickedCategory === "All") {
      return toDos;
    } else {
      return toDo.category === clickedCategory;
    }
  });
  return (
    <>
      <ToDoForm onAddToDos={addToDo} currentCategory={clickedCategory} />
      {toDos.length === 0 && (
        <Container>
          <Col md={5} className="mx-auto mt-4">
            <Alert>There are not todos on your list yet</Alert>
          </Col>
        </Container>
      )}
      {toDos.length > 0 && <ToDosFilter onChangeCategory={categoryHandler} />}
      <ToDosContainer myToDos={filteredToDos} />
    </>
  );
}

export default ToDos;
