const mysql = require('mysql');


const PARAMS = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "reddit"
};

const MySQL_DB = (PARAMS) => {
    let connection = mysql.createConnection(PARAMS);

    connection.connect(function (err) {
        if (err) {
            console.error(`Database connection error ${err.stack}`);
            return 
        }

        console.log(`DataBase connected as id ${connection.threadId}`);
    })

    return connection;
}


module.exports = MySQL_DB;
