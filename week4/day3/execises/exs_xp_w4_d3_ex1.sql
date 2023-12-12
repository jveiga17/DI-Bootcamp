SELECT *
FROM language;

SELECT film.title, film.description, language.name AS language_name
FROM film
JOIN language ON film.language_id = language.language_id;

SELECT film.title, film.description, language.name AS language_name
FROM language
LEFT JOIN film ON language.language_id = film.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES
('Film A'),
('Film B');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INTEGER CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP
);

-- Add 2 movie reviews
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES
(1, 1, 'Great Movie!', 9, 'This movie was fantastic.', NOW()),
(2, 2, 'Disappointing', 4, 'Not as good as I expected.', NOW());


