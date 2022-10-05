import ToDoForm from "./ToDoForm";
import ToDosContainer from "./ToDosContainer";
import ToDosFilter from "./ToDosFilter";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Container, Col } from "react-bootstrap";

/*
1. user fills the form, submits and addToDo is fired. ToDos State changes and component ir re-rendered.
2. Initially the clickedCategory is "All" and all the toDos are displayed.
3. when user changes category, clickedCategory state changes and the component is re-rendered. Now the todos
that are shown in the ui are filteredToDos.
4. when user clicks on a ToDoItem, this is removed from the list: a new array without the calceled item is created and set as main toDos state.
5. because of state change, the component is re-rendered. In case the current clickedCategory state is !== "All" then the toDos are filtered otherwise all the toDos are shown.


*/

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
    const filteredToDos = toDos.filter((toDo) => toDo.title !== id);
    setToDos(filteredToDos);
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
