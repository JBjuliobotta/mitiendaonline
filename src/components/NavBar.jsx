import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="bg-offcanvas">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  JulioShop
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-offcanvas">
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Categorías</Nav.Link>
                  <Nav.Link href="#action1">Contacto</Nav.Link>
                  <Nav.Link href="#action2">Administración</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Nav.Link href="#action2">Ingresar</Nav.Link>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
