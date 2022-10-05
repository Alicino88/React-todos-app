import ToDoForm from "./ToDoForm";
import ToDosContainer from "./ToDosContainer";
import ToDosFilter from "./ToDosFilter";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Container, Col } from "react-bootstrap";

/*
1. user fills the form, submits and addToDo is fired. ToDos State changes and component ir re-rendered.
2. Initially the clickedCategory state is "All" and filteredToDos value is the same as toDos. All the todos are rendered.
3. when user changes category, clickedCategory state changes and the component is re-rendered. Now the todos
are filtered according to clickedCategory.
4. when user clicks on a ToDoItem, this is removed from the list: a new array without the calceled item is created and set as main toDos state.
5. because of state change, the component is re-rendered. 
In case the current clickedCategory state is "All", then all toDos are shown, otherwise they are filtered by category.


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

  /*
  const filteredToDos = toDos.filter(
    (toDo) => toDo.category === clickedCategory
  );*/

  const filteredToDos = toDos.filter((toDo) => {
    if (clickedCategory === "All") {
      return toDos;
    } else {
      return toDo.category === clickedCategory;
    }
  });
  console.log(filteredToDos);

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
            <Alert>
              Your todo list is empty. Add a todo by typing in the form above.
            </Alert>
          </Col>
        </Container>
      )}
      {toDos.length > 0 && (
        <ToDosFilter
          onChangeCategory={categoryHandler}
          selectedCategory={clickedCategory}
        />
      )}
      {toDos.length > 0 && filteredToDos.length === 0 && (
        <Container>
          <Col md={5} className="mx-auto mt-4">
            <Alert>There are no todos for this category yet</Alert>
          </Col>
        </Container>
      )}
      {/*{clickedCategory === "All" && (
        <ToDosContainer
          myToDos={toDos}
          removeToDo3={deleteToDo}
          category={clickedCategory}
        />
      )}*/}

      <ToDosContainer
        myToDos={filteredToDos}
        category={clickedCategory}
        removeToDo3={deleteToDo}
      />
    </>
  );
}

export default ToDos;
