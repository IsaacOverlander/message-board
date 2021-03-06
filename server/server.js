const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool');

const PORT = process.env.PORT | 5000;

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Server up on port:', PORT);
});

app.get('/messages', (req, res) => {
    console.log('In GET');
    const query = `SELECT * FROM "messages";`;
    pool.query(query).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        res.sendStatus(500);
    });// End GET
});

app.post('/', (req, res) => {
    messageToAdd = req.body;
    query = `INSERT INTO "messages" ("name", "message") VALUES ($1, $2);`;
    pool.query(query, [messageToAdd.name, messageToAdd.message])
        .then((results) => {
            res.sendStatus(201);
        }).catch((error) => {
            res.sendStatus(500);
        });// End query
});// End POST