const mysql = require('mysql');
const MySQL_DB = require('./DB-MySQL');

const queryFilter = (target) => {
    if (target != undefined) {
        return ` WHERE ${target}`;
    } else {
        return '';
    }
};

function getUserById (db, userId) {
    let query = `SELECT ?? FROM ??${queryFilter(userId)};`;
    let columns = ['id', 'name', 'signed_at'];

    let inserts = [columns, 'User', userId];
    query = mysql.format(query, inserts);
    console.log(query);
};


function getPostById (db, postId) {
    let query = `SELECT ?? FROM ??${queryFilter(postId)};`;
    let columns = ['id', 'topic_id', 'title', 'content', 'urlVal', 'created_at'];

    let inserts = [columns, 'Post', postId];
    query = mysql.format(query, inserts);
};

function getVoteOfPost (db, postId) {
    let query = `SELECT ?? FROM ??${queryFilter(postId)};`;
    let columns = ['id', 'post_id', 'upvote_count', 'downvote_count'];

    let inserts = [columns, 'Post_Vote', postId];
    query = mysql.format(query, inserts);
}

function getVoteOfUser (db, userId) {
    let query = `
                ${queryFilter(userId)};`;
    // let columns = 
}

getUserById(MySQL_DB, 1);