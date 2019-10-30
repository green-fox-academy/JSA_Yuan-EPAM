const express = require('express');
const app = express();
const PORT = 3000;

const data = require('./data');

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

function cocktailsFilter(type, data) {
    let selectedCocktails;

    if (type != undefined) {
        selectedCocktails = data.filter(item => {
            return item['contains'].includes(type);
        })
    }

    return selectedCocktails;
}

app.get('/', (req, res) => {
    let alcoholType = req.query.alcohol;
    let selectedCocktails = cocktailsFilter(alcoholType, data.cocktails);

    res.render('home', {
        alcoholList: data.alcoholList,
        cocktails: alcoholType ? selectedCocktails : data.cocktails,
        alcoholType : alcoholType
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});