import ToDoForm from "./ToDoForm";
import ToDosContainer from "./ToDosContainer";
import { useState } from "react";

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
      <ToDosContainer myToDos={toDos} />
    </>
  );
}

export default ToDos;
