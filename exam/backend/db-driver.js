const mysql = require('mysql');
const DB_MySQL = require('./DB-MySQL');

/* -------------------------------------- 

Tools Initialization 

-----------------------------------------*/
let executeQuery = (query, db) => (
    new Promise((resolve, reject) => {
        db.query(query, (err, result) => {
            if (err) {
                console.log(err.message);
                reject(err);
            }
            resolve(result);
            console.log('Executed a query successfully!');
        });
    })
)
/* -------------------------------------- 

Retrieve data

-----------------------------------------*/
function getQuestionById(question_id, db = DB_MySQL) {
    let query = `SELECT ??, ?? FROM Question`;
    let columns = ['id', 'content'];
    query = mysql.format(query, columns);

    console.log(query);
    return executeQuery(query, db);
}

function getAllOptions(db = DB_MySQL) {
    let query = `SELECT ??, ??, ??, ?? 
                 FROM Question LEFT JOIN Vote
                    ON ?? = ??`;
    let inserts = ["Vote.id", "content", "name", "votes", "Question.id", "Vote.question_id"];
    query = mysql.format(query, inserts);
    // console.log(query);
    return executeQuery(query, db);
        
}

// console.log(getQuestionById());
// getAllOptions();

module.exports = {
    DB_MySQL,
    getQuestionById,
    getAllOptions
}