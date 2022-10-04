import ToDoForm from "./ToDoForm";
import ToDosContainer from "./ToDosContainer";
import ToDosFilter from "./ToDosFilter";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Container, Col } from "react-bootstrap";

function ToDos() {
  const [toDos, setToDos] = useState([]);
  const [clickedCategory, setclickedCategory] = useState("All");

  //console.log(toDos);

  //console.log(clickedCategory);

  const addToDo = (newToDo) => {
    setToDos((previousToDos) => {
      return [...previousToDos, newToDo];
    });
  };

  const categoryHandler = (selectedCategory) => {
    setclickedCategory(selectedCategory);
    if (selectedCategory === "All") {
      return toDos;
    } else {
      const filteredToDos = toDos.filter(
        (toDo) => toDo.category === selectedCategory
      );
      setToDos(filteredToDos);
    }
  };

  const deleteToDo = (id) => {
    const filteredToDos = toDos.filter((toDo) => toDo.title !== id);
    setToDos(filteredToDos);
  };

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
      <ToDosContainer myToDos={toDos} removeToDo3={deleteToDo} />
    </>
  );
}

export default ToDos;
