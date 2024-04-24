import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Navbar.css';
import { baseName } from './router';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar id='navbar' className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href={`/${baseName}`}>
            <img
              alt=""
              src="\img\avis-ebron-high-resolution-logo-transparent (1).png"
              className="d-inline-block align-top"
            />{' '}

          </Navbar.Brand>
          <Nav className="me-auto">
          <NavLink id='aboutMe' to="/about" className="nav-link-big">About Me</NavLink>
        </Nav>
        </Container>
      </Navbar>
  );
}

export default NavbarComponent;