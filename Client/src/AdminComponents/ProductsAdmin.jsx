import React, { useEffect, useState } from "react";
import { Table, Container, Button, Modal, Form } from "react-bootstrap";
import Axios from "axios";
import { NavAdmin } from "./NavAdmin";

export const ProductTableAdmin = () => {
  const [products, setProducts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    Axios.get("http://localhost:3001/GetAllProducts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al recuperar los productos", error);
      });
  }, []);

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    Axios.delete(`http://localhost:3001/DeleteProduct/${selectedProduct.id_producto}`)
      .then((response) => {
        setProducts(
          products.filter((product) => product.id_producto !== selectedProduct.id_producto)
        );
        setShowDeleteModal(false);
      })
      .catch((error) => {
        console.error("Hubo un error al borrar el producto", error);
      });
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditedProduct(product);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const confirmEdit = () => {
    Axios.put(
      `http://localhost:3001/EditProduct/${editedProduct.id_producto}`,
      editedProduct
    )
      .then((response) => {
        setProducts(
          products.map((product) =>
            product.id_producto === editedProduct.id_producto ? editedProduct : product
          )
        );
        setShowEditModal(false);
      })
      .catch((error) => {
        console.error("Hubo un error al editar el producto", error);
      });
  };

  return (
    <>
      <NavAdmin />
      <Container className="mt-4">
        <h1>Tabla de Productos</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id_producto}>
                <td>{product.id_producto}</td>
                <td>{product.pro_nombre}</td>
                <td>{product.pro_precio}</td>
                <td>{product.pro_cantidad}</td>
                <td>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => handleEdit(product)}
                  >
                    Editar
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(product)}>
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
        <Modal.Body>¿Estás seguro que quieres borrar este producto?</Modal.Body>
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
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="pro_nombre"
                value={editedProduct.pro_nombre || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrecio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                name="pro_precio"
                value={editedProduct.pro_precio || ""}
                onChange={handleEditChange}
              />
            </Form.Group>
            <Form.Group controlId="formCantidad">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="text"
                name="pro_cantidad"
                value={editedProduct.pro_cantidad || ""}
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
