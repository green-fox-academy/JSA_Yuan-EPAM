const express = require('express');
const path = require('path');
const DB = require('./DB');

const app = express();
const PORT = 3000;

app.set(__dirname, 'views');
app.set('view engine', 'ejs');
// app.use(express.static('views'));

const DB_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bookstore'
};

let queries = {
    titleQuery: 'SELECT * FROM book_mast;',
    bookInfoQuery: `SELECT bk.book_id, bk.cate_id, bk.pub_id, bk.book_name, aut.aut_name, cate.cate_descrip, npub.pub_name, p.purch_price
                    FROM book_mast as bk INNER JOIN author as aut
                        ON bk.aut_id = aut.aut_id INNER JOIN category as cate 
                        ON bk.cate_id = cate.cate_id INNER JOIN newpublisher as npub 
                        ON bk.pub_id = npub.pub_id INNER JOIN purchase as p
                        ON bk.book_id = p.book_id AND bk.cate_id = p.cate_id
                    WHERE cate.cate_descrip = ?;`
};


let dbConnection = DB(DB_CONFIG);

let endpointIndex = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
};

let queryData = (dbConnection, queryStr, queryInput) =>
    new Promise((resolve, reject) => {
        dbConnection.query(queryStr, queryInput, (err, dbResult) => {
            if (err) {
                reject(err);
            }
            resolve(dbResult);
        });
    });

let endpointBook = (app, dbConnection, queries) => {
    app.get('/books', async (req, res) => {
        // let titles = await queryData(dbConnection, queryStr);

        let queryInput = [req.query.category];
        let bookInfo = await queryData(dbConnection, queries["bookInfoQuery"], queryInput);
        // console.log(bookInfo);
        res.render('home', { data: bookInfo });
    })
}

endpointIndex(app);
endpointBook(app, dbConnection, queries);

// dbConnection.end(() => console.log('DataBased ended!'));

app.listen(PORT, () => {
    console.log(`Express server running on port: ${PORT}`)
});

