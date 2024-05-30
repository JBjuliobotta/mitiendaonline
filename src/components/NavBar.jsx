import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./css/navbar.css";

const NavBar = () => {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg"
          data-bs-theme="dark"
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand href="#" className="me-auto">
              JulioShop
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="navbar-toggler" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="bg-offcanvas">
                <Offcanvas.Title  id={`offcanvasNavbarLabel-expand-${expand}`}>
                  JulioShop
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-offcanvas">
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <NavLink to="/" className={"nav-link"}>Inicio</NavLink>
                  <NavLink to="/categories" className={"nav-link"}>Categorías</NavLink>
                  <NavLink to="/contact" className={"nav-link"}>Contacto</NavLink>
                  <NavLink to="/about" className={"nav-link"}>Sobre Nosotros</NavLink>
                  <NavLink to="/administration" className={"nav-link"}>Administración</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Button type="button" className="btn-login">
              Ingresar
            </Button>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
