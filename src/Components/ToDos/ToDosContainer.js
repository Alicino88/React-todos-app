import {
  Container,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
} from "react-bootstrap";

function ToDosContainer(props) {
  console.log(props);
  return (
    <Container className="mt-5">
      <Col md={5} className="mx-auto bg-light">
        <ListGroup as="ol" numbered>
          {props.myToDos.map((item) => (
            <ListGroupItem
              as="li"
              className="d-flex justify-content-between align-items-start"
              key={item.title}
            >
              {item.title}
              <Badge pill bg="warning" text="dark">
                {item.date}
              </Badge>
            </ListGroupItem>
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
