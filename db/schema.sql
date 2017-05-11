CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
	id INT AUTO_INCREMENT,
    burger_name varchar(20),
    devoured BOOLEAN DEFAULT false,
    ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

INSERT INTO burger (burger_name) VALUES ("McDouble");
INSERT INTO burger (burger_name) VALUES ("WHOPPER");
INSERT INTO burger (burger_name) VALUES ("cheese");
INSERT INTO burger (burger_name) VALUES ("HAM");

SELECT * FROM burger;

drop database burgers_db;

