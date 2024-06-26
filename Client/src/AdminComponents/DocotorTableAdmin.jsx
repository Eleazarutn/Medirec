import React, { useEffect, useState } from "react";
import { Table, Container, Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";
import { NavAdmin } from "./NavAdmin";

export const DoctorTableAdmin = () => {
  const [doctors, setDoctors] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [editedDoctor, setEditedDoctor] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:3001/GetAllDoctors")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al recuperar los doctores", error);
      });
  }, []);

  const handleDelete = (doctor) => {
    setSelectedDoctor(doctor);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    Axios.delete(`http://localhost:3001/DeleteDoctor/${selectedDoctor.id_doctor}`)
      .then((response) => {
        setDoctors(
          doctors.filter((doctor) => doctor.id_doctor !== selectedDoctor.id_doctor)
        );
        setShowDeleteModal(false);
      })
      .catch((error) => {
        console.error("Hubo un error al borrar el doctor", error);
      });
  };

  const handleEdit = (doctor) => {
    setSelectedDoctor(doctor);
    setEditedDoctor(doctor);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedDoctor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const confirmEdit = () => {
    Axios.put(
      `http://localhost:3001/EditDoctor/${editedDoctor.id_doctor}`,
      editedDoctor
    )
      .then((response) => {
        setDoctors(
          doctors.map((doctor) =>
            doctor.id_doctor === editedDoctor.id_doctor ? editedDoctor : doctor
          )
        );
        setShowEditModal(false);
      })
      .catch((error) => {
        console.error("Hubo un error al editar el doctor", error);
      });
  };

  return (
    <>
      <NavAdmin />
      <Container className="mt-4">
        <h1>Tabla de Doctores</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Turno</th>
              <th>Teléfono</th>
              <th>Estado</th>
              <th>Colonia</th>
              <th>Calle</th>
              <th>Número de Calle</th>
              <th>Especialidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id_doctor}>
                <td>{doctor.id_doctor}</td>
                <td>{doctor.doc_nombre}</td>
                <td>{doctor.doc_apellidos}</td>
                <td>{doctor.doc_turno}</td>
                <td>{doctor.doc_telefono}</td>
                <td>{doctor.doc_estado}</td>
                <td>{doctor.doc_colonia}</td>
                <td>{doctor.doc_calle}</td>
                <td>{doctor.doc_numero_calle}</td>
                <td>{doctor.doc_especialidad}</td>
                <td>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => handleEdit(doctor)}
                  >
                    Editar
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(doctor)}>
                    Borrar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Modal de Confirmación de Borrado */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Borrado</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro que quieres borrar este doctor?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Borrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Edición */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="doc_nombre"
                value={editedDoctor.doc_nombre || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formApellidos">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="doc_apellidos"
                value={editedDoctor.doc_apellidos || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formTurno">
              <Form.Label>Turno</Form.Label>
              <Form.Control
                type="text"
                name="doc_turno"
                value={editedDoctor.doc_turno || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="doc_telefono"
                value={editedDoctor.doc_telefono || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                name="doc_estado"
                value={editedDoctor.doc_estado || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formColonia">
              <Form.Label>Colonia</Form.Label>
              <Form.Control
                type="text"
                name="doc_colonia"
                value={editedDoctor.doc_colonia || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formCalle">
              <Form.Label>Calle</Form.Label>
              <Form.Control
                type="text"
                name="doc_calle"
                value={editedDoctor.doc_calle || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formNumeroCalle">
              <Form.Label>Número de Calle</Form.Label>
              <Form.Control
                type="text"
                name="doc_numero_calle"
                value={editedDoctor.doc_numero_calle || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formEspecialidad">
              <Form.Label>Especialidad</Form.Label>
              <Form.Control
                type="text"
                name="doc_especialidad"
                value={editedDoctor.doc_especialidad || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmEdit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
