import React, { useEffect, useState } from 'react';
import { Table, Container, Button, Modal, Form } from 'react-bootstrap';
import Axios from 'axios';
import { NavAdmin } from './NavAdmin';

export const UserstableAdmin = () => {
  const [users, setUsers] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:3001/GetAllUsers")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al recuperar los usuarios", error);
      });
  }, []);

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    Axios.delete(`http://localhost:3001/DeleteUser/${selectedUser.id_usuario}`)
      .then((response) => {
        setUsers(users.filter(user => user.id_usuario !== selectedUser.id_usuario));
        setShowDeleteModal(false);
      })
      .catch((error) => {
        console.error("Hubo un error al borrar el usuario", error);
      });
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditedUser(user);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const confirmEdit = () => {
    Axios.put(`http://localhost:3001/EditUser/${editedUser.id_usuario}`, editedUser)
      .then((response) => {
        setUsers(users.map(user => (user.id_usuario === editedUser.id_usuario ? editedUser : user)));
        setShowEditModal(false);
      })
      .catch((error) => {
        console.error("Hubo un error al editar el usuario", error);
      });
  };

  return (
    <>
      <NavAdmin />
      <Container className="mt-4">
        <h1>Tabla de Usuarios</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Teléfono</th>
              <th>Alergias</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id_usuario}>
                <td>{user.id_usuario}</td>
                <td>{user.usa_nombre}</td>
                <td>{user.usa_apellidos}</td>
                <td>{user.usa_telefono}</td>
                <td>{user.usa_alergias}</td>
                <td>{user.usa_email}</td>
                <td>
                  <Button variant="warning" className="me-2" onClick={() => handleEdit(user)}>Editar</Button>
                  <Button variant="danger" onClick={() => handleDelete(user)}>Borrar</Button>
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
        <Modal.Body>¿Estás seguro que quieres borrar este usuario?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancelar</Button>
          <Button variant="danger" onClick={confirmDelete}>Borrar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Edición */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="usa_nombre"
                value={editedUser.usa_nombre || ''}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formApellido">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="usa_apellidos"
                value={editedUser.usa_apellidos || ''}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="usa_telefono"
                value={editedUser.usa_telefono || ''}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formAlergias">
              <Form.Label>Alergias</Form.Label>
              <Form.Control
                type="text"
                name="usa_alergias"
                value={editedUser.usa_alergias || ''}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="usa_email"
                value={editedUser.usa_email || ''}
                onChange={handleEditChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={confirmEdit}>Guardar Cambios</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
