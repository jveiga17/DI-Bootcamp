-- code written in pgadmin4 - exercisesxp - part1

-- Create a new database named 'restaurant'
CREATE DATABASE restaurant;

-- Create a new table named 'Menu_Items'
CREATE TABLE Menu_Items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    item_price SMALLINT DEFAULT 0
);
