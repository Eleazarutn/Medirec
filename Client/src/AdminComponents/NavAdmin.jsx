import React, { useState } from "react";
import { Container, Navbar, Image, Nav, Row, Offcanvas, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import axios from "axios";
import jsPDF from "jspdf";
import 'jspdf-autotable';
import MenuIcon from "../../assets/image/MenuIcon.png";
import MedirecLogo from "../../assets/image/MedirecLogo.jpg";
import { SearchNavAdmin } from "./SearchNavAdmin";

export const NavAdmin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const generateDoctorsPDF = () => {
    axios.get("http://localhost:3001/GetAllDoctors")
      .then((response) => {
        const doctors = response.data;
        const doc = new jsPDF();
        doc.text("Reporte de Doctores", 20, 20);

        const tableColumn = ["ID", "Nombre", "Apellidos", "Turno", "Teléfono", "Estado", "Colonia", "Calle", "Número", "Especialidad"];
        const tableRows = [];

        doctors.forEach(doctor => {
          const doctorData = [
            doctor.id_doctor,
            doctor.doc_nombre,
            doctor.doc_apellidos,
            doctor.doc_turno,
            doctor.doc_telefono,
            doctor.doc_estado,
            doctor.doc_colonia,
            doctor.doc_calle,
            doctor.doc_numero_calle,
            doctor.doc_especialidad
          ];
          tableRows.push(doctorData);
        });

        doc.autoTable(tableColumn, tableRows, { startY: 30 });
        doc.save("Reporte_Doctores.pdf");
      })
      .catch((error) => {
        console.error("Error al obtener los doctores", error);
      });
  };

  const generateUsersPDF = () => {
    axios.get("http://localhost:3001/GetAllUsers")
      .then((response) => {
        const users = response.data;
        const doc = new jsPDF();
        doc.text("Reporte de Usuarios", 20, 20);

        const tableColumn = ["ID", "Nombre", "Apellidos", "Edad", "Teléfono", "Estado", "Colonia", "Calle", "Alergias", "Email"];
        const tableRows = [];

        users.forEach(user => {
          const userData = [
            user.id_usuario,
            user.usa_nombre,
            user.usa_apellidos,
            user.usa_edad,
            user.usa_telefono,
            user.usa_estado,
            user.usa_colonia,
            user.usa_calle,
            user.usa_alergias,
            user.usa_email
          ];
          tableRows.push(userData);
        });

        doc.autoTable(tableColumn, tableRows, { startY: 30 });
        doc.save("Reporte_Usuarios.pdf");
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios", error);
      });
  };

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
            <SearchNavAdmin />
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
                <Dropdown.Item onClick={generateUsersPDF}>Generar informe general usuarios</Dropdown.Item>
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
                <Dropdown.Item href="/adminDoctors">Administrar Doctores</Dropdown.Item>
                <Dropdown.Item onClick={generateDoctorsPDF}>Generar informe general doctores</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>

          <Row className="p-1">
            <Dropdown as={ButtonGroup}>
              <Button variant="success">Productos</Button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="/adminProducts">Stock de productos</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Ventas</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
