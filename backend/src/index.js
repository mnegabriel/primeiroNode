const express = require('express')

const app = express();
app.use(express.json());

app.get('/projects', (req, res) => {
    const query = req.query;
    console.log(query);

    return res.json([
        'Project 1',
        'Project 2'
    ])
});

app.post('/projects', (req, res) => {
    const body = req.body;
    console.log(body)

    return res.json([
        'Project 1',
        'Project 2',
        'Peoject 3'
    ])
});

app.put('/projects/:id', (req, res) => {
    const params = req.params
    console.log(params)

    return res.json([
        'Project 4',
        'Project 2',
        'Peoject 3'
    ])
});

app.delete('/projects/:id', (req, res) => {
    return res.json([
        'Project 2',
        'Peoject 3'
    ])
});

app.listen(3333, () => {
    console.log(" 🙌 Backend Started")
});