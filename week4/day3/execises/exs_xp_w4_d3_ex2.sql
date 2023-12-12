UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'NewLanguage')
WHERE title IN ('Film A', 'Film B');

SELECT
    conname AS foreign_key_name,
    conrelid::regclass AS table_name,
    a.attname AS column_name
FROM
    pg_constraint
    JOIN pg_attribute a ON a.attnum = ANY(conkey)
WHERE
    confrelid = 'customer'::regclass;

DROP TABLE customer_review;

SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

SELECT film_id, rental_rate
FROM rental
ORDER BY rental_rate DESC
LIMIT 30;

--1st film
SELECT title
FROM film
WHERE description LIKE '%sumo wrestler%' AND
      film_id IN (SELECT film_id FROM film_actor WHERE actor_id IN (SELECT actor_id FROM actor WHERE first_name = 'Penelope' AND last_name = 'Monroe'));

--2nd film
SELECT title
FROM film
WHERE length < '01:00:00' AND rating = 'R';

--3rd film
SELECT title
FROM film
WHERE rental_rate > 4.00 AND
      film_id IN (SELECT film_id FROM rental WHERE return_date BETWEEN '2005-07-28' AND '2005-08-01' AND customer_id IN (SELECT customer_id FROM customer WHERE first_name = 'Matthew' AND last_name = 'Mahan'));

--4th film
SELECT title
FROM film
WHERE (title ILIKE '%boat%' OR description ILIKE '%boat%') AND
      replacement_cost > (SELECT AVG(replacement_cost) FROM film);
