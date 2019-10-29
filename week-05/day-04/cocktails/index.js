const express = require('express');
const app = express();
const PORT = 3000;

const data = require('./data');

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render('home', {
        alcoholList: data.alcoholList,
        cocktails : data.cocktails
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    console.log(data.alcoholList);
});