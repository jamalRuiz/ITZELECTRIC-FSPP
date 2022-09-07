import axios from "axios";
import { useState, useEffect } from "react";
import Car from "./Car.js";

const API = process.env.REACT_APP_API_URL;

function Cars() {
  const [cars, setCars] = useState([])

  
  useEffect(() => {
    axios.get(`${API}/electric`)
      .then((response) => setCars(response.data.payload))
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="Cars" >
            {cars.map((car) => {
              return <Car key={car.id} car={car} />;
            })}
    </div>
  );
}

export default Cars;