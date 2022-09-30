import ToDoForm from "./ToDoForm";
import { useState } from "react";

function ToDos() {
  const [toDos, setToDos] = useState([]);
  console.log(toDos);
  const addToDo = (newTitle, newDate, newCathegory) => {
    console.log(newTitle);
    setToDos((previousToDos) => {
      return [
        ...previousToDos,
        { title: newTitle, date: newDate, newCathegory },
      ];
    });
  };
  return (
    <>
      <ToDoForm onAddToDos={addToDo} />
    </>
  );
}

export default ToDos;
