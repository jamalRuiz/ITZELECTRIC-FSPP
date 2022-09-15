DROP DATABASE IF EXISTS d6r0i5kt4v7ln6
 ;
CREATE DATABASE d6r0i5kt4v7ln6
 ;
\c d6r0i5kt4v7ln6
;

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