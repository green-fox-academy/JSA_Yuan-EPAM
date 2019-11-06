const mysql = require('mysql');
const MySQL_DB = require('./DB-MySQL');

const DataSample = require('./dataSample');

/* DataBase Data Initialization */


/* -------------------------------------------------------- */

/* --------------------- Insert Data -------------------*/
function insertTopic(db) {
    let query = `INSERT INTO Topic (name, created_at) VALUES
                (?, ?)`;
    let values = ['space', '2019-11-05 12:15:20'];

    console.log(query);
    let dbResult = db.query(query, values, (err, result) => {
        if (err) {
            return console.log(err.message);
        }
        console.log('INSERTED SUCCESSFULLY! Row inserted:' + result.insertId);
        return result;
    });
    db.end(console.log(`id ${db.threadId} MySQL Database closed.`));

    return dbResult;
};

// console.log('inserted id:' + insertTopic(MySQL_DB).insertId);

function insertPost2db(db, postData) {
    let query = `INSERT INTO Post ()`
};


/* --------------------- Retrive Data -------------------*/
const queryFilter = (items) => {
    // Filter object item without value
    let target = Object.keys(items)
        .filter(key => items[key] != undefined)
        .reduce((obj, key) => {
            obj[key] = items[key];
            return obj;
        }, {});

    // Join query string
    let queryString = Object.keys(target).map(key => {
        return key + '=' + items[key];
    }).join(' and ');
    // console.log(queryString);
    return queryString ? ` WHERE ${queryString}` : '';
};

function getTopicByName(db, name) {
    let query = `SELECT ?? FROM Topic${queryFilter({"name":name})}`;
    let columns = ['id', 'name', 'created_at'];
    let inserts = [columns, 'Topic'];
    query = mysql.format(query, inserts);

    console.log(query);
    
    let dbResult = db.query(query, (err, result) => {
        if (err) {
            return console.log(err.message);
        }
        console.log('INSERTED SUCCESSFULLY! Row inserted:' + result.insertId);
        console.log('topics: ');
        console.log(result);
        return result;        
    });
    return dbResult;
}

getTopicByName(MySQL_DB, 'space');

function getUserById(db, userId) {
    let query = `SELECT ?? FROM ??${queryFilter({ 'user_id': userId })};`;
    let columns = ['id', 'name', 'signed_at'];

    let inserts = [columns, 'User', userId];
    query = mysql.format(query, inserts);
    console.log(query);
};

function getPostById(db, postId) {
    let query = `SELECT ?? FROM ??${queryFilter({ 'post_id': postId })};`;
    let columns = ['id', 'topic_id', 'title', 'content', 'urlVal', 'created_at'];

    let inserts = [columns, 'Post', postId];
    query = mysql.format(query, inserts);
};

function getVote(db, postId, userId) {
    let items = { "post_id": postId, "user_id": userId };
    let query = `SELECT ?? FROM ??${queryFilter(items)};`
    let columns = ['id', 'post_id', 'user_id', 'vote_status', 'voted_at'];

    let inserts = [columns, 'Vote', postId, userId];
    query = mysql.format(query, inserts);
    console.log(query);
}

/* ---------------------------------------------------------------------------- */


// const test = { 'a': 1, 'b': 2, 'c': undefined };
// const test1 = { 'a': 1 };
// getUserById(MySQL_DB, 1);
// getVote(MySQL_DB, 1, 2);
