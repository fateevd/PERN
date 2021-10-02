create TABLE person
(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(50),
    surname  VARCHAR(50),
    login    VARCHAR(10),
    password VARCHAR(10)
);


create TABLE post
(
    id      SERIAL PRIMARY KEY,
    title   VARCHAR(50),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) References person (id)
);