import ToDoForm from "./ToDoForm";
import ToDosContainer from "./ToDosContainer";
import ToDosFilter from "./ToDosFilter";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Container, Col } from "react-bootstrap";

function ToDos() {
  const [toDos, setToDos] = useState([]);
  const [clickedCategory, setclickedCategory] = useState("Hobby");

  //console.log(toDos);
  const addToDo = (newToDo) => {
    //console.log(newTitle);
    setToDos((previousToDos) => {
      return [...previousToDos, newToDo];
    });
  };

  const filterToDo = (selectedCategory) => {
    setclickedCategory(clickedCategory);
    const filteredToDos = toDos.filter((toDo) => {
      return toDo.category === selectedCategory;
    });
    console.log(filteredToDos);
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
      {toDos.length > 0 && <ToDosFilter onChangeCategory={filterToDo} />}
      <ToDosContainer myToDos={toDos} />
    </>
  );
}

export default ToDos;
