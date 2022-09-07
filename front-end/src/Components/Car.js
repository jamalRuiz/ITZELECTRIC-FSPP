import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
function Car({ car }) {
  return (
    <div className="car">
      <Container>
        <Row>
          <Col lg={6}>
            <Card
              style={{ background: "#92828D" }}
              className="box"
            >
              <Card.Img
                variant="top"
                src={car.image}
                className='carImages'
              />
              <Card.Body>
                <Card.Title> </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Link to={`/electric/${car.id}`}>
                  <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Car;
