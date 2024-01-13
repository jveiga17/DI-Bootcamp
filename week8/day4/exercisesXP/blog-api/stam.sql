-- registering sql coding
-- creating posts table
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

-- inserting data
INSERT INTO posts (title, content) VALUES
	('First Post', 'This is the content of the first post.'),
    ('Second Post', 'Content of the second post goes here.');
	
-- test
select * from posts;