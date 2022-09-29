import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavBar(props) {
  return (
    <Navbar bg="red" variant="red">
      <Container>
        <Navbar.Brand href="#home">Todos</Navbar.Brand>
        {!props.isLogged && (
          <Nav.Link onClick={props.onSetIsLogged}>Login</Nav.Link>
        )}

        {props.isLogged && (
          <Nav.Link onClick={props.onSetIsLogged}>Logout</Nav.Link>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
