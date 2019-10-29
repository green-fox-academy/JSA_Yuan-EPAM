// import express from 'express'
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/assets/index.html')
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
    console.log(__dirname);
})