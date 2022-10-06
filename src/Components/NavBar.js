/*Needed to install react-router-bootstrap to change Link of React-Router to LinkContainer 
(otherwse there was an a element nestend inside another a element) */

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { LinkContainer } from "react-router-bootstrap";

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="white">
      <Container className="p-3">
        <LinkContainer to="/">
          <Navbar.Brand className="text-white" to="/">
            Todos
          </Navbar.Brand>
        </LinkContainer>
        {!props.isLogged && (
          <LinkContainer to="/login" className="text-white">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        )}
        {props.isLogged && (
          <LinkContainer to="/" className="text-white">
            <Nav.Link onClick={props.onLogout}>Logout</Nav.Link>
          </LinkContainer>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
