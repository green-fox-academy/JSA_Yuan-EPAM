SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS Question;
DROP TABLE IF EXISTS Vote;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE IF NOT EXISTS Question (
    id INT NOT NULL AUTO_INCREMENT,
    content TEXT,

    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Vote (
    id INT NOT NULL AUTO_INCREMENT,
    question_id INT NOT NULL,
    name VARCHAR(25),
    votes INT DEFAULT 0,

    PRIMARY KEY (id),
    FOREIGN KEY (question_id) 
        REFERENCES Question (id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);


INSERT INTO Question (content) VALUES ("Where should we go for dinner?");
INSERT INTO Vote (question_id, name, votes) VALUES 
    (1, "Italian", 1), (1, "Mexican", 0);

