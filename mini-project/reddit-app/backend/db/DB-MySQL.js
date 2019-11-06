const mysql = require('mysql');


const Config = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "reddit"
};

const MySQL_DB = (Config) => {
    let connection = mysql.createConnection(Config);

    connection.connect(function (err) {
        if (err) {
            console.error(`Database connection error ${err.stack}`);
            return 
        }

        console.log(`DataBase connected as id ${connection.threadId}`);
    })

    return connection;
}


module.exports = MySQL_DB(Config);
