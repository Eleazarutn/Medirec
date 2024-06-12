import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GiftIcon from "../assets/image/GiftIcon.png";
import UserIcon from "../assets/image/UserIcon.png";

export const DashBoard = () => {
  return (
    <>
      <Container fluid className="p-2">
        <Row className="p-5">
          <Col xs={12} md={6} className="bg-light border">
            <Row className="p-3">
              <Col>
                <img
                  src={GiftIcon}
                  alt="Placeholder"
                  className="img-fluid "
                  style={{ height: "50%", marginRight: "20px" }}
                />
                <Button variant="secondary" size="sm" className="p-1">
                  Tu primera consulta gratis
                </Button>
              </Col>
            </Row>

            <Row className="p-3">
              <h1>Atención médica en línea por solo $99 MXN</h1>
              <Col>
                <Button variant="primary" style={{ marginTop: "5px" }} href="/login">
                  Comenzar consulta
                </Button>
              </Col>
            </Row>

            <Row className="p-3">
              <Col xs={6} md={4}>
                <img
                  src={UserIcon}
                  alt="Placeholder"
                  style={{ height: "30px" }}
                />
                <img
                  src={UserIcon}
                  alt="Placeholder"
                  style={{ height: "30px" }}
                />
                <img
                  src={UserIcon}
                  alt="Placeholder"
                  style={{ height: "30px" }}
                />
                <img
                  src={UserIcon}
                  alt="Placeholder"
                  style={{ height: "30px" }}
                />
              </Col>

              <Col xs={6} md={8}>
                <p>Pacientes Atendidos +10000 </p>
              </Col>
            </Row>
          </Col>

          <Col
            xs={12}
            md={6}
            className="bg-light border d-flex justify-content-center align-items-center"
          >
            <img
              src="https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Placeholder"
              className="img-fluid p-4"
            />
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
};
