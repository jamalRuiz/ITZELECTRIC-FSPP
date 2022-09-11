const db = require("../db/dbConfig.js");
const getAllCars = async () => {
    try {
        const allElectric = await db.any('SELECT * FROM electric');
        console.log(allElectric)
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
        return allElectric;

    } catch (err) {
        return err
    }
};

const getCar = async (id) => {
    try {
        const electric = await db.one ("SELECT * FROM electric WHERE id=$1", id)
        return electric
    } catch (error) {
        return error;
    }
}
const createCar = async (carData) => {
    const {price, make, model, year, vin, stock, country_origin, exterior_color, interior_color, transmission, drivetrain, total_range, engine, image} = carData;
    try {
        const newCar = await db.one(
       "INSERT INTO electric (price, make, model, year, vin, stock, country_origin, exterior_color, interior_color, transmission, drivetrain, total_range, engine, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *",
        [price, make, model, year, vin, stock, country_origin, exterior_color, interior_color, transmission, drivetrain, total_range, engine, image]
        );
        return newCar;
    } catch (error) {
        return error
    }

}

const deleteCar = async (id) => {
    try {
        const deleteCar = await db.one('DELETE FROM electric WHERE id=$1 RETURNING *', id);
        return deleteCar;
    } catch (err) {
        return err;
    }
}
const updateCar = async (carData, id) => {
    const {price, make, model, year, vin, stock, country_origin, exterior_color, interior_color, transmission, drivetrain, total_range, engine, image} = carData
     try {
        const carData = await db.one (
            'UPDATE electric SET price=$1, make=$2, model=$3, year=$4, vin=$5, stock=$6, country_origin=$7, exterior_color=$8, interior_color=$9, transmission=$10, drivetrain=$11, total_range=$12, engine=$13, image=$14 WHERE id=$15 RETURNING *',
            [price, make, model, year, vin, stock, country_origin, exterior_color, interior_color, transmission, drivetrain, total_range, engine, image,id]
        );
        return carData;
     } catch (err) {
        return err;
     }
} 
module.exports = { getAllCars , getCar , createCar , deleteCar, updateCar};
