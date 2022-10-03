import { ListGroupItem, Badge } from "react-bootstrap";

function toDoItem(props) {
  console.log(props.date);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  //const year = props.date.getFullYear();
  return (
    <ListGroupItem
      as="li"
      key={props.title}
      className="d-flex justify-content-between"
    >
      <div className="ms-2 me-auto"> {props.title}</div>
      <Badge pill bg="warning" text="dark">
        <span>{day}</span> <span>{month}</span> <span>{year}</span>
      </Badge>
    </ListGroupItem>
  );
}

export default toDoItem;
