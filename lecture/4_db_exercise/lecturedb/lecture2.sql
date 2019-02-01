-- -- DROP TABLE authors;
-- CREATE TABLE authors (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(20)
-- );

-- DROP TABLE articles;
-- CREATE TABLE articles(
--     article_id SERIAL PRIMARY KEY,
--     title VARCHAR,
--     author_id INTEGER REFERENCES authors(id)
-- );

-- INSERT INTO authors VALUES
-- (DEFAULT, 'Sobha')
-- ,(DEFAULT, 'Raul')
-- ,(DEFAULT, 'Eric')
-- ,(DEFAULT, 'John')
-- ,(DEFAULT, 'Anuj')
-- ,(DEFAULT, 'Phong')
-- ,(DEFAULT, 'Jean')
-- ,(DEFAULT, 'Sam')
-- ,(DEFAULT, 'Steven')
-- ,(DEFAULT, 'Rigo')
-- ,(DEFAULT, 'Oscar')
-- ,(DEFAULT, 'Ray')
-- ;

-- INSERT INTO articles VALUES
-- (DEFAULT, 'Happy Holidays', 1)
-- ,(DEFAULT, 'Coding for Beginners', 2)
-- ,(DEFAULT, 'Coding Bootcamp', 3)
-- ,(DEFAULT, 'Postgress is relational',2 )
-- ,(DEFAULT, 'Mongodb is weird',3 )
-- ,(DEFAULT, 'Javascript 101', 4)
-- ,(DEFAULT, 'Bootstrap 102', 4)
-- ,(DEFAULT, 'Girs who code - in Houston', 5)
-- ,(DEFAULT, 'Flatiron is a coding bootcamp', 6)
-- ,(DEFAULT, 'Ruber ducky teaches you how to teach', 7)
-- ,(DEFAULT, 'Node is fun', 8)
-- ,(DEFAULT, 'Impressed by Express', 9);

-- DELETE FROM authors WHERE id >= 13;

-- ----------ONE TO MANY RELATIONSHIP--------------
-- ==== INNER JOIN 1
SELECT DISTINCT(au.name), COUNT(title) FROM authors au INNER JOIN articles ar on au.id = ar.author_id GROUP BY au.name;

-- ==== INNER JOIN 2
SELECT * FROM articles, authors where  articles.author_id = authors.id;

-- === CARTESIAN JOIN - both all matches
SELECT * FROM articles, authors;

-- === LEFT OUTER JOIN - all left + any of the matches from right
SELECT * FROM authors LEFT OUTER JOIN articles on authors.id = author_id;

-- === RIGHT OUTER JOIN - all right + any of the matches from left
SELECT * FROM authors RIGHT OUTER JOIN articles on authors.id = author_id;

-- === OUTER JOIN - all data 
SELECT * FROM authors FULL OUTER JOIN articles on authors.id = author_id;

-- ---------- MANY TO MANY RELATIONSHIP--------------
SELECT * FROM member 