const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db-driver');
const app = express();
const PORT = 8080;


app.set('view engisne', 'ejs');
app.use(cors());
app.use(bodyParser.json());

let getPoll = () => app.get('/api/poll', async (req, res) => {
    // let data = await db.getQuestionById();
    let data = await db.getAllOptions();
    // await db.DB_MySQL.release;
    console.log('Get poll data from db');
    console.log(data);
    res.json(data);

});

let updateOptionVote = () => app.post('/api/vote/:optionId', async (req, res) => {
    console.log("updating option vote...");
    console.log(req.body);
    try {
        let data = req.body;
        console.log(data);
        await db.updateOptionVoteById(data);
        let updatedPoll = await db.getAllOptions();
        res.json(updatedPoll);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(PORT, () => (
    console.log(`Server is running at port: ${PORT}`)
))

getPoll();
updateOptionVote();