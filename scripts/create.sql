CREATE TABLE IF NOT EXISTS person (
    id BIGSERIAL NOT NULL,
    name varchar(255),
    surname varchar(255),
    age integer,
    occupation_area_id int8,
    created_at TIMESTAMP default now(),
    updated_at TIMESTAMP default now(),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS occupation_area (
    id BIGSERIAL NOT NULL,
    description text,
    created_at TIMESTAMP default now(),
    updated_at TIMESTAMP default now(),
    PRIMARY KEY(id)
);

INSERT INTO occupation_area (description) VALUES ('engenheiro');
INSERT INTO occupation_area (description) VALUES ('programador');

INSERT INTO person (name, surname, age, occupation_area_id) VALUES ('pedro', 'fernando', 32, 1);
