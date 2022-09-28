import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <Navbar bg="red" variant="red">
      <Container>
        <Navbar.Brand href="#home">Todos</Navbar.Brand>
        <Nav.Link>Login</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
