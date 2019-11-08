const express = require('express');
const cors = require('cors');
const db = require('./db-driver');
const app = express();
const PORT = 8080;


app.set('view engisne', 'ejs');
app.use(cors());

let getPoll = () => app.get('/api/poll', async (req, res) => {
    // let data = await db.getQuestionById();
    let data = await db.getAllOptions();
    // await db.DB_MySQL.release;
    console.log('Get poll data from db');
    console.log(data);
    res.json(data);

});

app.listen(PORT, () => (
    console.log(`Server is running at port: ${PORT}`)
))

getPoll();