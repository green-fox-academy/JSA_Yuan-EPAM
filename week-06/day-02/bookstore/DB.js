const mysql = require('mysql');

const DB = (PARAMS) => {
    let conn = mysql.createConnection(PARAMS);

    conn.connect(function (err) {
        if (err) {
            console.error('DataBase error connecting ' + err.stack);
            return;
        }

        console.log('DataBase connected as id ' + conn.threadId);
    });


    return conn;
};

// DB(DB_CONFIG);

module.exports = DB;
// conn.end();

