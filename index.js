const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/sesb', (req, res) => {
    res.json('Salam Sejahtera UiTM!');
});

app.get('/nama', (req, res) => {
    res.json({ nama: 'UiTM'});
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});

//Run app, then load http://localhost:3030 in a browser to see the output.