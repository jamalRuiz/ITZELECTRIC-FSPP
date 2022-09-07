import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
function Car({car}) {
  return (
    <div className="car">
      <Container>
        <Row>
          <Col lg={6}>
            <Card
              style={{ background: "#92828D" }}
              className="box"
            >
              <Link to={`/electric/${car.id}`}>
                <Button variant="secondary">Show Details
              <Card.Img
                variant="top"
                src={car.image}
                className='carImages'
              />
              </Button>
                </Link>
              <Card.Body>
                <Card.Title>{`${car.year} ${car.make} ${car.model}`} </Card.Title>
                <Card.Text>
                  <p>0 miles</p>
                  <p>{car.drivetrain}</p>
                  {`$${car.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}`}
                </Card.Text>
                <Link to={`/electric/cart`}>
                  <Button variant="primary" value={car.id} >Add to Cart</Button>
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
