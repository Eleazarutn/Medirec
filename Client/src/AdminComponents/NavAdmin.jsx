import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import MenuIcon from "../../assets/image/MenuIcon.png";
import { Image, Nav, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import MedirecLogo from "../../assets/image/MedirecLogo.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';


export const NavAdmin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid style={{ backgroundColor: "#C4DEE0" }}>
        <Navbar className="mx-auto">
          <Container fluid>
            <Navbar.Brand href="#">
              <Image
                src={MenuIcon}
                fluid
                height={"20px"}
                width={"20px"}
                onClick={handleShow}
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#">
                <Image src={MedirecLogo} style={{ maxHeight: "40px" }} />
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Container>
        </Navbar>
      </Container>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row className="p-1">
            <Dropdown as={ButtonGroup}>
              <Button variant="success">Usuarios (Pacientes)</Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="/adminUsers">Administrar Pacientes</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Genera Informes</Dropdown.Item>
                <Dropdown.Item href="#/action-3"></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row className="p-1">
            <Dropdown as={ButtonGroup}>
              <Button variant="success">Doctores</Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Administrar Doctores</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Chat Doctor</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Notificar Doctor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
