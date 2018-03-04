var express = require('express');
var i18n = require('./i18n');
var compression = require('compression');
var helmet = require('helmet');


var app = express();

app.use(helmet());
app.use(compression()); //Compress all routes
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.use(i18n);

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.listen('3000');