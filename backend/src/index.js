const express = require('express')

const app = express();

app.get('/projects', (req, res) => {
    return res.json([
        'Project1',
        'Project2'
    ])
});

app.get('/projects', (req, res) => {
    return res.json([
        'Project1',
        'Project2',
        'Peoject3'
    ])
});

app.listen(3333, () => {
    console.log(" 🙌 Backend Started")
});