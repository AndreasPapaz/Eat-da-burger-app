CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
	id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name varchar(20),
    devoured BOOLEAN,
    date TIMESTAMP
);

INSERT INTO burger (burger_name) VALUES ("McDouble");
INSERT INTO burger (burger_name) VALUES ("WHOPPER");
INSERT INTO burger (burger_name) VALUES ("cheese");
INSERT INTO burger (burger_name) VALUES ("HAM");