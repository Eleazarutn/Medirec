import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";

import MedirecLogo from "../assets/image/MedirecLogo.jpg";
import LoginIcon from "../assets/image/LoginIcon.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "../SinglePagesOutComp/Login";

import { useLocation } from "react-router-dom";

const HeaderButtons = () => {
  const location = useLocation();
  
  return (
    location.pathname === "/" && (
      <Form className="d-flex ">
        <Button
          variant="success"
          href="/login"
          className="d-flex align-items-center"
          style={{ marginRight: "5px" }}
        >
          Iniciar sesión
        </Button>

        <Button
          variant="warning"
          href="/login"
          className="d-flex align-items-center"
        >
          Registrate
        </Button>
      </Form>
    )
  );
};

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <a href="/">
            <Image src={MedirecLogo} style={{ maxHeight: "40px" }} />
          </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Servicios</Nav.Link>
            <Nav.Link href="#action2">Farmacia</Nav.Link>
            <Nav.Link href="#action2">Soluciones</Nav.Link>
            <Nav.Link href="#action2">¿Como agendar?</Nav.Link>
            <Nav.Link href="#action2">Equipo Medico</Nav.Link>
          </Nav>

          <HeaderButtons></HeaderButtons>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
