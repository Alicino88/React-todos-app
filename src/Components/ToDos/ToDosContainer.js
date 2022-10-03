import { Container, Col, ListGroup } from "react-bootstrap";
import ToDoItem from "./ToDoItem";

function ToDosContainer(props) {
  //console.log(props);
  return (
    <Container className="mt-3">
      <Col md={5} className="mx-auto bg-light">
        <ListGroup as="ol" numbered>
          {props.myToDos.map((item) => (
            <ToDoItem
              title={item.title}
              date={item.date}
              cathegory={item.cathegory}
              key={item.title}
            />
          ))}
        </ListGroup>
      </Col>
    </Container>
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
