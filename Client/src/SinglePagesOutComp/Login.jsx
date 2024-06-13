import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../ComponentsIndex/Header";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from 'axios';

export const Login = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const UserLogin = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/LoginUser", {
      Correo: correo,
      Contraseña: password
    }).then((response) => {
      alert(response.data);
      navigate('/user'); // Redirige al usuario a /user
    }).catch((error) => {
      alert("Correo o contraseña incorrectos");
      console.error("Hubo un error al autenticar el usuario", error);
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

              <Button variant="primary" type="submit" className="p-2" size="sm">
                Iniciar sesión
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
