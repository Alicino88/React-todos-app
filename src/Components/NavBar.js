import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { LinkContainer } from "react-router-bootstrap";

function NavBar(props) {
  return (
    <Navbar bg="primary" variant="white">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="text-white" to="/">
            Todos
          </Navbar.Brand>
        </LinkContainer>
        {!props.isLogged && (
          <LinkContainer to="/login" className="text-white">
            <Nav.Link onClick={props.onSetIsLogged}>Login</Nav.Link>
          </LinkContainer>
        )}
        {props.isLogged && (
          <LinkContainer to="/login" className="text-white">
            <Nav.Link onClick={props.onSetIsLogged}>Logout</Nav.Link>
          </LinkContainer>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
