var express = require('express');
var app = express();

app.get('/get', (request, response) => {
    response.send('Route poprzez metodę GET.');
});

app.post('/post', (request, response) => {
    response.send('Route poprzez metodę POST.');
});

app.listen(8080);

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/studium_przypadku", function (err, db) {
    if(err) throw err;
});