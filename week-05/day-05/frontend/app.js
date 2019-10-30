const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.static('assets'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    if (req.query.input != undefined) {
        res.send({
            received: req.query.input,
            result: req.query.input * 2
        });
    } else {
        res.send({
            error: 'Please provide an input'
        })
    }

});


function checkMissingParam(query, type) {
    const expectParams = {
        "greeter": {name: "name", title: "title"},
        // "appendA": {appendable: "appendable"}
    };
    let missingParam = [];
    Object.values(expectParams[type]).forEach(val => {
        if (!(val in query)) {
            missingParam.push(val);
        }
    })
    return missingParam;
}

app.get('/greeter', (req, res) => {
    let missingParam = checkMissingParam(req.query, "greeter");
    let data = {};
    if (missingParam.length < 1) {
        data = {
            welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
        };
    } else {
        let errorType = {
            1 : `Please provide a ${missingParam[0]}!`,
            2 : `Please provide a ${missingParam[0]} and a ${missingParam[1]}!`
        }
        data = {
            error: errorType[missingParam.length]
        }
    }
    res.send(data);
})

app.get('/appenda/:appendable', (req, res) => {
    let data = {};
    if (req.params) {
        data = {
            appended: `${req.params.appendable}a`
        }
        res.send(data);
    } else {
        res.status(404);
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})