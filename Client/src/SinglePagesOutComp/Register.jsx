import React, { useState } from "react";
import { Header } from "../ComponentsIndex/Header";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from 'axios';

export const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [alergias, setAlergias] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const UserRegister = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/RegisterUser", {
      Nombre: nombre,
      Apellido: apellido,
      Telefono: telefono,
      Alergias: alergias,
      Correo: correo,
      Contraseña: password
    }).then(() => {
      alert("Usuario Registrado con éxito");
    }).catch((error) => {
      console.error("Hubo un error al registrar el usuario", error);
    });
  }

  return (
    <>
      <Header />
      <Container
        className="d-flex justify-content-center align-items-center p-4"
        style={{ minHeight: "100vh" }}
      >
        <Row className="w-100">
          <Col xs={12} md={6} className="mx-auto">
            <h1 className="text-center">
              Estamos a un paso de transformar tu salud
            </h1>
            <h4 className="text-center">Crea una nueva cuenta</h4>
            <Form onSubmit={UserRegister}>
              <Form.Group className="mb-3" controlId="Nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingresa tu nombre" 
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Apellido">
                <Form.Label>Apellido</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingresa tu apellido" 
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="phone"
                  placeholder="Ingrese número de teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Deben ser 10 dígitos
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Alergias">
                <Form.Label>Alergias</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingrese las alergias"
                  value={alergias}
                  onChange={(e) => setAlergias(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Ingrese únicamente alergias que estén comprobadas por un
                  método médico
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Correo">
                <Form.Label>Correo</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Ingresa tu correo" 
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Procura ingresar un correo válido y de fácil acceso
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Contraseña">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="*************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Ingresa una contraseña de un máximo de 10 dígitos que incluya
                  letras, números y caracteres especiales
                </Form.Text>
              </Form.Group>

              <Button variant="success" type="submit" className="p-2" size="sm">
                Registrarme
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
