CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	email VARCHAR(50) UNIQUE,
	username VARCHAR(30) UNIQUE,
	first_name VARCHAR(30),
	last_name VARCHAR(30)
);

-- hashpwd 
CREATE TABLE hashpwd (
	id SERIAL PRIMARY KEY,
	username VARCHAR(30) UNIQUE,
	password VARCHAR(30)
);