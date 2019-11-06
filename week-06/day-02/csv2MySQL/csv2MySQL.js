const fs = require('fs');
const path = require('path');
const csvParse = require('csv-parse');
const DB = require('./DB');

const DB_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookstore'
};

let dbConnection = DB(DB_CONFIG);
let query = 'INSERT INTO TABLE (Prefix'

let filePath = path.join('.', 'db', 'data-sample.csv');

let loadCSV = (filePath) => {
    let csvData = [];
    fs.createReadStream(filePath)
        .pipe(csvParse({ delimiter: ':' }))
        .on('data', (row) => {
            // console.log(row);
            csvData.push(row);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            console.log(csvData);
            return csvData;
        });
}

let convert2sql = (csvData) => {

}


