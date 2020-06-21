const express = require('express')
const { uuid } = require('uuidv4');
const { response } = require('express');

const app = express();
app.use(express.json());

const projects = [];

app.get('/projects', (req, res) => {
    // const query = req.query;
    // console.log(query);

    return res.json(projects);
});

app.post('/projects', (req, res) => {
    const { title, owner } = req.body;

    const project = { id: uuid(), title, owner };
    projects.push(project)

    return res.json(project)
});

app.put('/projects/:id', (req, res) => {
    const { id } = req.params
    const projectIndex = projects.findIndex(project => project.id == id);

    if (projectIndex < 0) {
        return res.status(400).json({ error: 'Project not found' })
    }



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