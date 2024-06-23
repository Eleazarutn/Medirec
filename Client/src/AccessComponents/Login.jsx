import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../IndexDashComponents/Header";
import Container from "react-bootstrap/esm/Container";
import { Row, Col, Modal, Button, Form } from "react-bootstrap";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar el CSS de Bootstrap

export const Login = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const navigate = useNavigate();

  const handleCloseErrorModal = () => setShowErrorModal(false);
  const handleShowErrorModal = () => setShowErrorModal(true);

  const handleCloseAuthModal = () => setShowAuthModal(false);
  const handleShowAuthModal= () => setShowAuthModal(true);
  
  const redirec = () =>{
    navigate('/admin')
  }

  const UserLogin = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/LoginUser", {
      Correo: correo,
      Contraseña: password,
    })
      .then((response) => {
        handleShowAuthModal();

      })
      .catch((error) => {
        handleShowErrorModal();
        console.error("Hubo un error al autenticar el usuario", error);
      });
  };

  return (
    <>
      <Header />
      <Container
        className="d-flex justify-content-center align-items-center p-4"
        style={{ minHeight: "100vh" }}
      >
        <Row className="w-100">
          <Col xs={12} md={6} className="mx-auto">
            <h1 className="text-center">Inicia sesión</h1>
            <Form onSubmit={UserLogin}>
              <Form.Group className="mb-3" controlId="Correo">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Contraseña">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Button
                    variant="primary"
                    type="submit"
                    className="p-2"
                    size="sm"
                  >
                    Iniciar sesión
                  </Button>
                </Col>
                <Col>
                  <span>¿No tienes una cuenta?</span>{" "}
                  <a href="/register">Registrarte aquí</a>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>

      <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error de Autenticación</Modal.Title>
        </Modal.Header>
        <Modal.Body>Correo o contraseña incorrectos.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseErrorModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAuthModal} onHide={handleCloseAuthModal}>
        <Modal.Header closeButton>
          <Modal.Title>Usuario Autenticado con extio</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bienvenido</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={redirec}>
            Siguiente
          </Button>
        </Modal.Footer>
      </Modal>


  
    </>
  );
};
