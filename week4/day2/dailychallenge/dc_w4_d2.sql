CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

SELECT * FROM FirstTab;

CREATE TABLE SecondTab (
    id integer 
);

INSERT INTO SecondTab VALUES
(5),
(NULL);


SELECT * FROM SecondTab;

--------------------------------

--Q1
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL);
-- Output is 3, for there are 3 rows in FirstTab where the id is not present in the SecondTab where id is NULL.

--Q2
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5);
--output is 2, as there are two rows in FirstTab (with id 6, and 7) where the ID is not present in the SecondTab where ID is 5

--Q3
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab);
-- two rows (ID 6 and ID 7) that satisfy the condition, and the count is 2.

--Q4
SELECT COUNT(*) 
FROM FirstTab AS ft 
WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL);
--(ID 6 and ID 7) that satisfy the condition, and the count is 2.