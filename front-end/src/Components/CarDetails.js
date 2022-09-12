import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
function CarDetails() {
  const [car, setCar] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/electric/${id}`).then((response) => {
      setCar(response.data.payload);
    });
  }, [id, navigate, API]);
  const deleteCar = () => {
    axios
      .delete(`${API}/electric/${id}`)
      .then(() => {
        navigate(`/electric`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteCar();
  };
  
  return (
    <>
      <article className="showBack">
        <aside> 
        </aside>
      <div className="showDetails" >
        <img className="center" src={car.image} alt={car.make}   />
        <h1>${(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(car.price))}</h1>
        <p>{`${car.year} ${car.make} ${car.model}`}</p>
        <p>0 miles</p>
        <Link to={`/electric/cart`}>
                  <Button variant="primary" value={car.id} >Add to Cart</Button>
                </Link>
       </div>
       <Table style={{color: "whitesmoke"}} >
      <thead>
        <tr>
          <h1> <th>Basics</th></h1>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Exterior Color</td>
          <td>{car.exterior_color}</td> 
        </tr>
        <tr>
          <td>Interior Color</td>
          <td>{car.interior_color}</td>
        </tr>
        <tr>
          <td>Drivetrain</td>
          <td >{car.drivetrain}</td>
        </tr>
        <tr>
          <td>Fuel Type</td>
          <td >{car.engine}</td>
        </tr>
        <tr>
          <td>Transmission</td>
          <td >{car.transmission}</td>
        </tr>
        <tr>
          <td>Engine</td>
          <td >{car.engine}</td>
        </tr>
        <tr>
          <td>VIN</td>
          <td >{car.vin}</td>
        </tr>
        <tr>
          <td>Stock #</td>
          <td >{car.stock}</td>
        </tr>
        <tr>
          <td>Mileage</td>
          <td >0 mi.</td>
        </tr>
        <tr>
          <td>Total Range</td>
          <td >{car.total_range} mi.</td>
        </tr>
      </tbody>
    </Table>

        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/electric`}>
              <button>Back</button>
            </Link>
          </div>
          <br></br>
          <div>
            <Link to={`/electric/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <br></br>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </>
  );
}

export default CarDetails;