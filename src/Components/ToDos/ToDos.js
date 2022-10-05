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

  const categoryHandler = (selectedCategory) => {
    setclickedCategory(selectedCategory);
  };

  const filteredToDos = toDos.filter(
    (toDo) => toDo.category === clickedCategory
  );

  const deleteToDo = (id) => {
    const filteredToDo = toDos.filter((toDo) => toDo.title !== id);
    setToDos(filteredToDo);
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
      {toDos.length > 0 && (
        <ToDosFilter
          onChangeCategory={categoryHandler}
          selectedCategory={clickedCategory}
        />
      )}
      {clickedCategory === "All" && (
        <ToDosContainer
          myToDos={toDos}
          removeToDo3={deleteToDo}
          category={clickedCategory}
        />
      )}
      {clickedCategory !== "All" && (
        <ToDosContainer
          myToDos={filteredToDos}
          category={clickedCategory}
          removeToDo3={deleteToDo}
        />
      )}
    </>
  );
}

export default ToDos;
