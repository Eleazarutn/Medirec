import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import ImgConsultaMedica from "../assets/image/ConsultaMedica.jpg";
import ImgConsultaMedicaPer from "../assets/image/ConsultaMedicaPer.jpg";
import ImgServiciosYCuidados from "../assets/image/ServiciosYCuidados.jpg";
import ImgPagoLinea from '../assets/image/PagoLinea.jpg';
import ImgFarmacia from '../assets/image/Farmacia.jpg';
import ImgDoctores from '../assets/image/Doctores.jpg';

import { IndexDashCard } from "../Components/ServicesDashj";

export const ServicesDashBoard = () => {

  
  return (
    <>
      <Container fluid className="p-2" id="action1">
        <Row className="p-4">
          <h1>Servicios y comodidades que te ofrecemos</h1>
          <h6>
            Descubre las soluciones en línea que te ofrecemos para disfrutar de
            una experiencia excepcional desde la comodidad de tu hogar.
          </h6>
        </Row>

        <Row className="p-4">
          <Col> <IndexDashCard imgSrc={ImgConsultaMedica} title={'Consulta General'}></IndexDashCard> </Col>
          <Col> <IndexDashCard imgSrc={ImgConsultaMedicaPer} title={'Consulta Personalizada'}></IndexDashCard> </Col>
          <Col> <IndexDashCard imgSrc={ImgServiciosYCuidados} title={'Servicios y Cuidados'}></IndexDashCard> </Col>
        </Row>

        <Row className="p-4">
          <Col> <IndexDashCard imgSrc={ImgPagoLinea} title={'Pago en linea'}></IndexDashCard> </Col>
          <Col> <IndexDashCard imgSrc={ImgFarmacia} title={'Farmacia'}></IndexDashCard> </Col>
          <Col> <IndexDashCard imgSrc={ImgDoctores} title={'Doctores'}></IndexDashCard> </Col>
        </Row>
        
      </Container>
    </>
  );
};
