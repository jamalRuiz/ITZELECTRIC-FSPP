const express = require('express');
const electric = express.Router();
const {getAllCars, getCar, createCar, deleteCar, updateCar,} = require('../queries/electric.js')

electric.get('/', async (req, res) => {
    const allCars= await getAllCars();
    if(allCars) {
        res.status(200).json({payload: allCars, success: true});

    } else {
        res.status(500).json ({error: 'server error'});
    }
});
electric.get('/:id', async (req, res) => {
    const{id} = req.params
    const car = await getCar(id);
    if(car.id) {
        res.json({payload: car, success: true})
        
    } else {
        res.status(404).json({payload: "not found", success:false, error:"Car not found"})
    }
})

electric.post('/', async (req, res) => {
    try{
        const car = await createCar(req.body);
        res.json({payload: car, success: true});

    } catch (error) {
        return error;
    }
} )

electric.delete('/:id', async (req, res) => {
    const {id} = req.params 
    const car = await deleteCar(id);
    if(car.id) {
        res.json({payload: car, success: true});
    } else {
        res.status(404).json({payload: "not found", success:false, error:"Car not found"})
    }
})

electric.put('/:id', async (req, res) => {
    const {id} = req.params;
    const car = await updateCar(req.body, id);
    if(car.id) {
        res.json(car);
    } else {
        res.status(404).json({payload: "not found", success:false, error:"Car not found"})
    }
}) 

module.exports = electric;