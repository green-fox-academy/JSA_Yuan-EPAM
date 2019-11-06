const express = require('express');
const path = require('path');

const bodyParser = require('body-parser').json();

const app = express();
const PORT = 3000;

const TodoData = require('./dataSample');

app.set('view engine', 'ejs');
app.use(bodyParser);


app.get('/', (req, res) => {
    console.log('hello?');
    res.sendFile(path.join(__dirname, 'index.html'));
}); 

app.get('/api/todos', (req, res) => {
    res.render('home', {
        todoData: TodoData['todos']
    });
});

app.post('/api/todos', (req, res) => {
    // let { id, text, done } = req.body;
    console.log(req.body);
    res.status(201).send('well received');

});


app.listen(PORT, () => {
    console.log(`Express running on PORt ${PORT}`);
});