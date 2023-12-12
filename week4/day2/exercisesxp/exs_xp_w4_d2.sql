SELECT * FROM customer;

SELECT first_name || ' ' || last_name AS full_name FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

SELECT a.address, a.phone
FROM customer c
JOIN address a ON c.address_id = a.address_id
WHERE a.district = 'Texas';

SELECT * FROM film WHERE film_id IN (15, 150);

SELECT * FROM film WHERE title = 'YourFavoriteMovie';

SELECT * FROM film WHERE LEFT(title, 2) = 'Yo';

SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10;

SELECT * FROM film
WHERE rental_rate > (SELECT MIN(rental_rate) FROM film)
ORDER BY rental_rate ASC
FETCH FIRST 10 ROWS ONLY;

SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

SELECT * FROM film
WHERE film_id NOT IN (SELECT film_id FROM inventory);

SELECT city, country FROM city
JOIN country ON city.country_id = country.country_id;

SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id;

