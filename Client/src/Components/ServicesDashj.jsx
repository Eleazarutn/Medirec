import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const IndexDashCard = ({ imgSrc, title }) => {
  return (
    <Container>
      <Card style={{ width: "18rem", paddingLeft: "10px", marginTop: "20px" }}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "200px", width: "100%" }}
        >
          <Card.Img
            variant="top"
            src={imgSrc}
            className="img-fluid"
            style={{ height: "100%", objectFit: "fill" }}
          />
        </div>
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};
