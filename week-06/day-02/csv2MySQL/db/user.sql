-- 
-- Database: `book store`
-- 

-- --------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS User (
    ID INT NOT NULL AUTO_INCREMENT,
    Prefix VARCHAR(25) NOT NULL DEFAULT '',
    FirstName VARCHAR(25) NOT NULL DEFAULT '',
    Address TEXT,
    Height FLOAT(8) NOT NULL DEFAULT 0,
    BitcoinAddr TEXT,
    ColorPrefer VARCHAR(8),

    PRIMARY KEY (ID)
 );


-- CREATE TABLE IF NOT EXISTS Bitcoin (
--     ID INT NOT NULL AUTO_INCREMENT,
--     BitcoinAddr TEXT,
--     User_ID INT,

--     PRIMARY KEY(ID),
--     FOREIGN KEY (User_ID) REFERENCES User (ID)
-- );




