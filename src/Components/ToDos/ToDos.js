import ToDoForm from "./ToDoForm";
import ToDosContainer from "./ToDosContainer";
import ToDosFilter from "./ToDosFilter";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Container, Col } from "react-bootstrap";

function ToDos() {
  const [toDos, setToDos] = useState([]);
  const [clickedCategory, setclickedCategory] = useState("All");
  const [noItems, setNoItems] = useState(false);
  console.log(noItems);

  //console.log(toDos);

  //console.log(clickedCategory);

  const addToDo = (newToDo) => {
    setToDos((previousToDos) => {
      return [...previousToDos, newToDo];
    });
  };

  const categoryHandler = (selectedCategory) => {
    setclickedCategory(selectedCategory);
    setNoItems(false);
    if (selectedCategory === "All") {
      return toDos;
    } else {
      const filteredToDos = toDos.filter(
        (toDo) => toDo.category === selectedCategory
      );

      if (filteredToDos.length > 0) {
        setToDos(filteredToDos);
      } else if (filteredToDos.length === 0) {
        setNoItems(true);
      }
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
      {!noItems > 0 && (
        <ToDosContainer myToDos={toDos} removeToDo3={deleteToDo} />
      )}
      {noItems && <p>There are no todos for this category yet</p>}
    </>
  );
}

export default ToDos;
