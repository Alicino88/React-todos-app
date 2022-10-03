import { ListGroupItem, Badge } from "react-bootstrap";

function toDoItem(props) {
  console.log(props.date);

  return (
    <ListGroupItem
      as="li"
      className="d-flex justify-content-between align-items-start"
      key={props.title}
    >
      {props.title}
      <Badge pill bg="warning" text="dark">
        {props.date}
      </Badge>
    </ListGroupItem>
  );
}

export default toDoItem;
