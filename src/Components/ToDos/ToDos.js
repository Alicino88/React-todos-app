import ToDoForm from "./ToDoForm";
import ToDosContainer from "./ToDosContainer";
import { useState } from "react";

function ToDos() {
  const [toDos, setToDos] = useState([]);
  //console.log(toDos);
  const addToDo = (newTitle, newDate, newCathegory) => {
    //console.log(newTitle);
    setToDos((previousToDos) => {
      return [
        ...previousToDos,
        { title: newTitle, date: newDate, category: newCathegory },
      ];
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
