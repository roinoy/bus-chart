var express = require('express');
var app = express();
var request = require('request');
var path    = require("path");

app.use(express.static(__dirname + '/public'));

app.get('/bus', function (req, res) {
  request('http://interview.optibus.co:2503/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    }
  });
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8080);