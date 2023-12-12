-- -- Customer table
-- CREATE TABLE Customer (
--     id INT PRIMARY KEY,
--     first_name VARCHAR(255) NOT NULL,
--     last_name VARCHAR(255) NOT NULL
-- );

-- -- CustomerProfile table
-- CREATE TABLE CustomerProfile (
--     id INT PRIMARY KEY,
--     isLoggedIn BOOLEAN DEFAULT false,
--     customer_id INT UNIQUE,
--     FOREIGN KEY (customer_id) REFERENCES Customer(id)
-- );

-- INSERT INTO Customer (id, first_name, last_name) VALUES
-- (1, 'John', 'Doe'),
-- (2, 'Jerome', 'Lalu'),
-- (3, 'Lea', 'Rive');

-- -- Inserting customer profiles
-- INSERT INTO CustomerProfile (id, isLoggedIn, customer_id) VALUES
-- (1, true, (SELECT id FROM Customer WHERE first_name = 'John')),
-- (2, false, (SELECT id FROM Customer WHERE first_name = 'Jerome'));


-- -- first_name of LoggedIn customers
-- SELECT c.first_name
-- FROM Customer c
-- JOIN CustomerProfile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = true;

-- -- Displaying all customers' first_name and isLoggedIn columns
-- SELECT c.first_name, COALESCE(cp.isLoggedIn, false) AS isLoggedIn
-- FROM Customer c
-- LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

-- -- Displaying the number of customers that are not LoggedIn
-- SELECT COUNT(*) AS NonLoggedInCustomers
-- FROM Customer c
-- LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn IS NULL OR cp.isLoggedIn = false;

-- Create Book table
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

-- Insert books
INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- Create Student table
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    age INTEGER CHECK (age <= 15)
);

-- Insert students
INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Create Library table (Junction Table)
CREATE TABLE Library (
    book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id)
);

-- Insert records into the junction table using subqueries
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');

-- Display the data

-- Select all columns from the junction table
SELECT * FROM Library;

-- Select the name of the student and the title of the borrowed books
SELECT s.name, b.title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Select the average age of the children who borrowed the book Alice in Wonderland
SELECT AVG(s.age) AS avg_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student from the Student table
DELETE FROM Student WHERE name = 'Patrick';
