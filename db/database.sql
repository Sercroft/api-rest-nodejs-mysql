CREATE DATABASE IF NOT EXISTS kibernum;

USE kibernum;

CREATE TABLE users(
    id INT(11) NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(100) DEFAULT NULL,
    type_identification VARCHAR(2),
    num_identification VARCHAR (16),
    gender VARCHAR(2),
    address VARCHAR(100) DEFAULT NULL,
    phone VARCHAR (10),
    PRIMARY KEY(ID)
);

DESCRIBE users;

INSERT INTO users VALUES
    (1, 'John Doe', 'CC', '012345678', 'M', 'Calle imaginaria 123 norte', '4455575'),
    (2, 'Henry Doe', 'CC', '879687654', 'M', 'Calle imaginaria 345 sur', '1223222'),
    (3, 'Jona Doe', 'CC', '987654321', 'M', 'Calle imaginaria 678 occidente', '2333433'),
    (4, 'Danna Doe', 'CC', '354645342', 'F', 'Calle imaginaria 901 oriente', '3444544');