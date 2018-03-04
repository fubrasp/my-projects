var express = require('express');
var i18n = require('./i18n');

var app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.use(i18n);

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.listen('3000');