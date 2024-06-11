import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

import google from "../assets/image/google.png";
import facebook from "../assets/image/facebook.png";

export const Login = () => {
  return (

   <>
    
        <div className="d-flex justify-content-center w-100">
            <p>Texto 1</p>
            <p>Texto 2</p>
        </div>

        <Container  className="d-flex aling-items-center">
          <Row>
            {/* Primera columna */}
            <Col>
              <Image
                src="https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=600"
                fluid
              />
              
            </Col>
    
            {/* Segunda Columna */}
            <Col>
              {/* Primera fila */}
              <Row>
                <h1>Hola Buenos Días</h1>
                <h2>Iniciar sesión con tu cuenta</h2>
              </Row>
    
              {/* Inputs */}
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
    
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
    
              {/* Olvidaste tu con */}
    
              <Row>
                <Button variant="link">Olvidaste tu contraseña</Button>
              </Row>
    
              <Button variant="primary" size="sm">
                Iniciar sesión{" "}
              </Button>
              <Button variant="secondary" size="sm">
                Registrate
              </Button>
    
              <hr />
    
              <div className="d-grid gap-2">
                <Button variant="outline-primary" size="lg">
                  <div>
                    <Row>
                      <Col>
                        <Image src={google} fluid />
                      </Col>
                      <Col> Iniciar Sesión con Google</Col>
                    </Row>
                  </div>
                </Button>
    
                <Button variant="outline-primary" size="lg">
                  <div>
                    <Row>
                      <Col>
                        <Image src={facebook} fluid />
                      </Col>
                      <Col> Iniciar Sesión con Google</Col>
                    </Row>
                  </div>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
   
   </>
  );
};
