import React from 'react'
import {Link} from "react-router-dom"

function Car({car}) {
  return (
    <div className='Car'>
<Link to={`/electric/${car.id}`}> 
<img src={car.image} alt={car.make} height={300} width={400}/>
</Link>
<h1>{car.make}</h1>
    </div>
  )
}

export default Car