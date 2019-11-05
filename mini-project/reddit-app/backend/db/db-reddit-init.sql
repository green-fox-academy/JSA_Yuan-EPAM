/*
 Database `reddit`
*/

DROP TABLE IF EXISTS Post_Vote;
DROP TABLE IF EXISTS User_Vote;

CREATE TABLE IF NOT EXISTS Topic (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(8) DEFAULT '',
    created_at DATETIME(6),
    
    PRIMARY KEY (id)
);

/*
Tables:
  Post
  Post_Vote
*/
CREATE TABLE IF NOT EXISTS Post (
    id INT NOT NULL AUTO_INCREMENT,
    topic_id INT NOT NULL,
    title VARCHAR(16) DEFAULT '',
    content TEXT,
    urlVal TEXT,
    created_at DATETIME(6),

    PRIMARY KEY (id),
    FOREIGN KEY (topic_id) REFERENCES Topic (id)
);

/*
CREATE TABLE IF NOT EXISTS Post_Vote (
    id INT NOT NULL AUTO_INCREMENT,
    post_id INT NOT NULL,
    upvote_count INT DEFAULT 0,
    downvote_count INT DEFAULT 0,

    PRIMARY KEY (id),
    FOREIGN KEY (post_id) 
        REFERENCES Post (id) 
        ON DELETE CASCADE 
);
*/


/*
Tables:
 User
 User_Vote
*/

CREATE TABLE IF NOT EXISTS User (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(16),
    signed_at DATETIME(6),

    PRIMARY KEY (id)
);


/*
CREATE TABLE IF NOT EXISTS User_Vote (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    voteVal TINYINT DEFAULT 0,
    voteState BOOLEAN DEFAULT false,
    vote_at DATETIME(6),

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) 
        REFERENCES User (id)
        ON DELETE CASCADE,
    FOREIGN KEY (post_id)
        REFERENCES Post (id)
        ON DELETE CASCADE
);
*/

/*
 Connection Tables:
  User_Post
*/
CREATE TABLE IF NOT EXISTS User_Post (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    post_id INT NOT NULL,

    PRIMARY KEY (id),
    FOREIGN KEY (user_id) 
        REFERENCES User (id)
        ON DELETE CASCADE,
    FOREIGN KEY (post_id) 
        REFERENCES Post (id)
        ON DELETE CASCADE
);


CREATE TABLE IF NOT EXISTS Vote (
    id INT NOT NULL AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id INT NOT NULL,

    PRIMARY KEY(id),
    FOREIGN KEY (post_id)
        REFERENCES Post (id)
        ON DELETE CASCADE,
    FOREIGN KEY (user_id) 
        REFERENCES User (id)
        ON DELETE CASCADE
);