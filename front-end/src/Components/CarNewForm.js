// // import React from "react";
// // import axios from "axios";
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Form from "react-bootstrap/Form";

// const API = process.env.REACT_APP_API_URL;
// function CarNewForm() {
// //   let navigate = useNavigate();
// //   const addCar = (newCar) => {
// //     axios
// //       .post(`${API}/electric`, newCar)
// //       .then((response) => navigate(`/electric`))
// //       .catch((error) => console.log(error));
// //   };
// //   const [newCar, setNewCar] = useState({
// //     price:"",
// //     make:"",
// //     model:"",
// //     year:"",
// //     VIN :"",
// //     stock:"",
// //     country_origin:"",
// //     exterior_color:"",
// //     interior_color:"",
// //     transmission:"",
// //     drivetrain:"", 
// //     total_range:"", 
// //     engine:"",
    
// //   });
// //   const handleTextChange = (event) => {
// //     setSnack({ ...snack, [event.target.id]: event.target.value });
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     addSnack(snack);
// //     navigate(`/snacks`);
// //   };
// //   return (
// //     <div className="New">
// //       <p>Snack Health is determined by</p>
// //         <ul>
// //           <li>Protein is above 5</li>
// //           <li>Or Fiber is above 5</li>
// //           <li>and Sugar is less than 5</li>
// //         </ul>
// //       <Form onSubmit={handleSubmit}>
// //         <Form.Group>
// //           <Form.Label htmlFor="name">Snack Name</Form.Label>
// //           <Form.Control
// //             id="name"
// //             className="mb-3"
// //             type="text"
// //             value={snack.name}
// //             placeholder="Name of Snack"
// //             onChange={handleTextChange}
// //             required
// //           ></Form.Control>
// //         </Form.Group>
// //         <Form.Group>
// //           <Form.Label htmlFor="fiber">Fiber</Form.Label>
// //           <Form.Control
// //             id="fiber"
// //             type="number"
// //             value={snack.fiber}
// //             placeholder="0"
// //             required
// //             onChange={handleTextChange}
// //           ></Form.Control>
// //         </Form.Group>
// //         <Form.Group>
// //           <Form.Label htmlFor="protein">Protein</Form.Label>
// //           <Form.Control
// //             id="protein"
// //             type="number"
// //             value={snack.protein}
// //             placeholder="0"
// //             required
// //             onChange={handleTextChange}
// //           ></Form.Control>
// //         </Form.Group>
// //         <Form.Group>
// //           <Form.Label htmlFor="added_sugar">Added Sugar</Form.Label>
// //           <Form.Control
// //             id="added_sugar"
// //             value={snack.added_sugar}
// //             type="number"
// //             placeholder="0"
// //             required
// //             onChange={handleTextChange}
// //           ></Form.Control>
// //         </Form.Group>
// //         <Form.Group>
// //           <Form.Label for="image">Image</Form.Label>
// //           <Form.Control
// //             id="image"
// //             value={snack.image}
// //             pattern="http[s]*://.+"
// //             type="text"
// //             placeholder="http://"
// //             required
// //             onChange={handleTextChange}
// //           ></Form.Control>
// //         </Form.Group>
// //        <input type="submit"/>
// //       </Form>
// //     </div>
// //   );
// // }

// export default CarNewForm;