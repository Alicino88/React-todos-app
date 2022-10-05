import { Container, Col, ListGroup } from "react-bootstrap";

import ToDoItem from "./ToDoItem";

function ToDosContainer(props) {
  //console.log(props);

  const removeToDo2 = (id) => {
    props.removeToDo3(id);
  };
  return (
    <>
      <Container className="mt-3">
        <Col md={5} className="mx-auto bg-light">
          <ListGroup as="ol" numbered>
            {props.myToDos.map((item) => (
              <ToDoItem
                title={item.title}
                date={item.date}
                category={item.category}
                key={item.title}
                removeToDo1={removeToDo2}
              />
            ))}
          </ListGroup>
        </Col>
      </Container>
    </>
  );
}

export default ToDosContainer;

/*    


        <div>
      {props.myToDos.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>

    */
