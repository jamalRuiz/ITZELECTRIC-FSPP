DROP DATABASE IF EXISTS ddab7tkopbd62;
CREATE DATABASE ddab7tkopbd62;
\c ddab7tkopbd62;

CREATE TABLE electric(
    id SERIAL PRIMARY KEY,
    price INT,
    make TEXT,
    model TEXT,
    year INT,
    vin TEXT,
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