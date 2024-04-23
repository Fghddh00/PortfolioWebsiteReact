import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Navbar.css';

function NavbarComponent() {
  return (
    <Navbar id='navbar' className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="src\img\avis-ebron-high-resolution-logo-transparent (1).png"
              className="d-inline-block align-top"
            />{' '}

          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link id='aboutMe' href="about" className="nav-link-big">About Me</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
  );
}

export default NavbarComponent;