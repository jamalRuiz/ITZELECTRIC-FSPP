import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

const API = process.env.REACT_APP_API_URL;
function CarNewForm() {
  const navigate = useNavigate();
  const [newCar, setNewCar] = useState({
    price: "",
    make: "",
    model: "",
    year: "",
    vin: "",
    stock: "",
    country_origin: "",
    exterior_color: "",
    interior_color: "",
    transmission: "",
    drivetrain: "",
    total_range: "",
    engine: "",
    image:""
  });
  const handleTextChange = (event) => {
    setNewCar({ ...newCar, [event.target.id]: event.target.value });
  };

  const addCar = (car) => {
    axios
      .post(`${API}/electric`, car)
      .then(() => navigate(`/electric`))
      .catch((error) => console.log(error));
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    addCar(newCar);
    navigate(`/electric`);
  };
  return (
    <div className="New">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="price">Price</Form.Label>
          <Form.Control
            id="price"
            className="mb-3"
            type="number"
            value={newCar.price}
            onChange={handleTextChange}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="make">Make</Form.Label>
          <Form.Control
            id="make"
            type="make"
            value={newCar.make}
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="model">Model</Form.Label>
          <Form.Control
            id="model"
            type="text"
            value={newCar.model}
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="year">Year</Form.Label>
          <Form.Control
            id="year"
            value={newCar.year}
            type="number"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="vin">VIN</Form.Label>
          <Form.Control
            id="vin"
            value={newCar.vin}
            type="text"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="stock">Stock</Form.Label>
          <Form.Control
            id="stock"
            value={newCar.stock}
            type="text"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="country_origin">Counry of Orgin</Form.Label>
          <Form.Control
            id="country_origin"
            value={newCar.country_origin}
            type="text"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="exterior_color">Exterior Color</Form.Label>
          <Form.Control
            id="exterior_color"
            value={newCar.exterior_color}
            type="text"
            required
            onChange={handleTextChange}
          ></Form.Control> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="interior_color">Interior Color</Form.Label>
          <Form.Control
            id="interior_color"
            value={newCar.interior_color}
            type="text"
            required
            onChange={handleTextChange}
          ></Form.Control> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor=" transmission">Transmission</Form.Label>
          <Form.Control
            id="transmission"
            value={newCar.transmission}
            type="text"
            required
            onChange={handleTextChange}
          ></Form.Control> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="drivetrain">Drivetrain</Form.Label>
          <Form.Control
            id="drivetrain"
            value={newCar.drivetrain}
            type="text"
            required
            onChange={handleTextChange}
          ></Form.Control> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="total_range">Total Range</Form.Label>
          <Form.Control
            id="total_range"
            value={newCar.total_range}
            type="number"
            required
            onChange={handleTextChange}
          ></Form.Control> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="engine">Engine</Form.Label>
          <Form.Control
            id="engine"
            value={newCar.engine}
            type="text"
            required
            onChange={handleTextChange}
          ></Form.Control> 
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="image">Image</Form.Label>
          <Form.Control
            id="image"
            value={newCar.image}
            type="text"
            placeholder="http://"
            required
            onChange={handleTextChange}
          ></Form.Control>
        </Form.Group>
        <input type="submit" value="submit" />
      </Form>
    </div>
  );
}

export default CarNewForm;
