-- +++++ PSQL BASICS ++++++

-- -- CREATE DATABASE lecture2;
-- -- DROP TABLE students;
-- -- CREATE TABLE students(
-- --     name varchar,
-- --     website varchar,
-- --     github_username varchar,
-- --     points integer,
-- --     gender char(1),
-- --     cohort_start_date date,
-- --     graduated boolean
-- -- );

-- -- CREATE TABLE students(
-- --     id SERIAL NOT NULL PRIMARY KEY,
-- --     name VARCHAR(15),
-- --     website VARCHAR(100),
-- --     github_user VARCHAR(50),
-- --     points integer,
-- --     gender char(1),
-- --     cohort_start_date date,
-- --     graduated boolean

-- -- );

-- -- INSERT INTO students VALUES
-- -- (
-- --     DEFAULT, 'Shoba', 'digitalcrafts.com', 'pizza', 6, 'F', '2018-11-12', FALSE
-- -- ),
-- -- (
-- --     DEFAULT, 'Eric', 'digitalcrafts1.com', 'panther', 2, 'M', '2018-11-12', FALSE
-- -- ),
-- -- (
-- --     DEFAULT, 'Phong', 'digitalcrafts2.com', 'pizza_panther', 8, 'M', '2018-11-12', FALSE
-- -- ),
-- -- (
-- --     DEFAULT, 'Ray', 'digitalcrafts3.com', 'pizza_panther1', 5, 'M', '2018-11-12', FALSE
-- -- ),
-- -- (
-- --     DEFAULT, 'Hiroko', 'digitalcrafts4.com', 'pizza', 6, 'F', '2018-11-12', FALSE
-- -- ),
-- -- (
-- --     DEFAULT, 'John', 'digitalcrafts5.com', 'panther', 2, 'M', '2018-11-12', FALSE
-- -- ),
-- -- (
-- --     DEFAULT, 'Raul', 'digitalcrafts6.com', 'pizza_panther', 8, 'M', '2018-11-12', FALSE
-- -- ),
-- -- (
-- --     DEFAULT, 'Steven', 'digitalcrafts7.com', 'pizza_panther1', 5, 'M', '2018-11-12', FALSE
-- -- )
-- -- ;


-- -- INSERT INTO students (name, github_user) VALUES (
-- --     'Sam', 'class'
-- -- );

-- UPDATE students SET points = 10, graduated = TRUE WHERE id = 1;
-- CREATE DATABASE lecture2;
-- DROP TABLE students;
-- CREATE TABLE students(
--     name varchar,
--     website varchar,
--     github_username varchar,
--     points integer,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean
-- );

-- CREATE TABLE students(
--     id SERIAL NOT NULL PRIMARY KEY,
--     name VARCHAR(15),
--     website VARCHAR(100),
--     github_user VARCHAR(50),
--     points integer,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean

-- );

-- INSERT INTO students VALUES
-- (
--     DEFAULT, 'Shoba', 'digitalcrafts.com', 'pizza', 6, 'F', '2018-11-12', FALSE
-- ),
-- (
--     DEFAULT, 'Eric', 'digitalcrafts1.com', 'panther', 2, 'M', '2018-11-12', FALSE
-- ),
-- (
--     DEFAULT, 'Phong', 'digitalcrafts2.com', 'pizza_panther', 8, 'M', '2018-11-12', FALSE
-- ),
-- (
--     DEFAULT, 'Ray', 'digitalcrafts3.com', 'pizza_panther1', 5, 'M', '2018-11-12', FALSE
-- ),
-- (
--     DEFAULT, 'Hiroko', 'digitalcrafts4.com', 'pizza', 6, 'F', '2018-11-12', FALSE
-- ),
-- (
--     DEFAULT, 'John', 'digitalcrafts5.com', 'panther', 2, 'M', '2018-11-12', FALSE
-- ),
-- (
--     DEFAULT, 'Raul', 'digitalcrafts6.com', 'pizza_panther', 8, 'M', '2018-11-12', FALSE
-- ),
-- (
--     DEFAULT, 'Steven', 'digitalcrafts7.com', 'pizza_panther1', 5, 'M', '2018-11-12', FALSE
-- )
-- ;


-- INSERT INTO students (name, github_user) VALUES (
--     'Sam', 'class'
-- );

-- UPDATE students SET points = 4, graduated = FALSE WHERE id = 1;

-- DELETE FROM students WHERE id = (SELECT MAX(id) FROM students);
-- DELETE FROM students WHERE id = 1

-- INSERT INTO students (name, github_user) VALUES(
--     'HHHH', 'sjsjsj'
-- );

-- +++++ DEFAULT ++++++
-- CREATE TABLE students2 (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name VARCHAR(15),
--     website VARCHAR(100),
--     github_user VARCHAR(50),
--     points integer DEFAULT 0,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean DEFAULT FALSE
-- );

-- INSERT INTO students2 VALUES(
--     DEFAULT,
--     'Momo',
--     'momo.com',
--     'momo',
--     DEFAULT,
--     'F',
--     '2018-12-12',
--     DEFAULT
-- );

-- CREATE TABLE students3(
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar,
--     github_user varchar UNIQUE NOT NULL,
--     points integer DEFAULT 0 CHECK (points >=0),
--     cohort_start_date date NOT NULL,
--     graduated boolean DEFAULT FALSE
-- );

-- INSERT INTO students3 (points, name, github_user, cohort_start_date) VALUES
-- (
--     0.1, 'Paul', 'pizza1', '2018-11-12'
-- ),
-- (
--     5, 'Paul', 'pizza2', '2018-11-12'
-- )
-- ;

ALTER TABLE students 
ADD test VARCHAR;

ALTER TABLE students
DROP test;

ALTER TABLE students
MODIFY COLUMN test1 integer DEFAULT 0;

ALTER TABLE students ALTER COLUMN test1 TYPE VARCHAR(50);
ALTER TABLE students DROP test1;


-- can change check and reference constraint
ALTER TABLE students ADD CONSTRAINT ??? check (points >= 3);

--new name
ALTER TABLE students RENAME TO new_name;

SELECT COUNT(*) FROM students;

-- OFFSET : Tells where to start : Start from 3 onwards
SELECT * FROM students ORDER BY points LIMIT 5 OFFSET 3;