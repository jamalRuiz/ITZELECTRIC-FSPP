DROP DATABASE IF EXISTS electric_dev;
CREATE DATABASE electric_dev;
\c electric_dev;

CREATE TABLE electric(
    id SERIAL PRIMARY KEY,
    price INT,
    make TEXT,
    model TEXT,
    year INT,
    VIN TEXT,
    stock TEXT,
    country_origin TEXT,
    exterior_color TEXT,
    interior_color TEXT,
    transmission TEXT,
    drivetrain TEXT,
    total_range INT, 
    engine TEXT,
    image TEXT
)