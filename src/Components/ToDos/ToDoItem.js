import { ListGroupItem, Badge } from "react-bootstrap";
import deleteIcon from "../../Assets/delete-icon.png";

function toDoItem(props) {
  //console.log(props.date);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  const removeToDo = () => {
    props.removeToDo1(props.title);
  };

  //const year = props.date.getFullYear();
  return (
    <ListGroupItem
      as="li"
      key={props.title}
      className="d-flex justify-content-between align-items-center fw-bold"
    >
      <div className="ms-2 me-auto fw-normal"> {props.title}</div>

      <Badge pill bg="warning" text="dark" className="me-3 p-2">
        <span>{day}</span> <span>{month}</span> <span>{year}</span>
      </Badge>
      <Badge pill className="fw-normal p-2">
        {props.category}
      </Badge>
      <img
        src={deleteIcon}
        alt="Delete icon by Icons8"
        height={30}
        className="ms-3 cursor-pointer"
        onClick={removeToDo}
      />
    </ListGroupItem>
  );
}

export default toDoItem;
