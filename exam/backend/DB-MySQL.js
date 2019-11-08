const mysql = require('mysql');

const config = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "doodle"
};

const DB_MySQL = (config) => {
    let connection = mysql.createConnection(config);

    connection.connect(function (err) {
        if (err) {
            console.log(`Database connection err ${err.stack}`);
            return
        }

        console.log(`DataBase connected as id ${connection.threadId}`);
    })

    return connection;
}

module.exports = DB_MySQL(config);