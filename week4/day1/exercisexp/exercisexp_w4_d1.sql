CREATE TABLE items (
	item_id serial PRIMARY KEY,
	item_name varchar (200),
	item_price DECIMAL(10, 2)
);

CREATE TABLE customers (
	customer_id serial PRIMARY KEY,
	customer_fname varchar (100),
	customer_lname varchar (100)
);

INSERT INTO items (item_name, item_price) VALUES
('Small Desk', 100.00),
('Large Desk', 300.00),
('Fan', 80);

INSERT INTO customers (customer_fname, customer_lname) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');

SELECT * FROM items;

SELECT * FROM items WHERE item_price > 80.00;

SELECT * FROM items WHERE item_price <= 300;

SELECT * FROM customers WHERE customer_lname = 'Smith';

SELECT * FROM customers WHERE customer_lname = 'Jones';

SELECT * FROM customers WHERE customer_fname != 'Scott';