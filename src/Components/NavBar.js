import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavBar(props) {
  return (
    <Navbar bg="primary" variant="primary" className="text-white">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          Todos
        </Navbar.Brand>
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
