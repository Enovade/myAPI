const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/tnb', (req, res) => {
    res.json('Salam Sejahtera TNB!!');
});

app.get('/ujian', (req, res) => {
    res.json('Salam Sejahtera TNB!!');
});

app.get('/enovade', (req, res) => {
    res.json({ nama: 'Free McD Burger'});
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});

//Run app, then load http://localhost:3030 in a browser to see the output.