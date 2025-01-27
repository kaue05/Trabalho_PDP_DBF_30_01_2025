var express = require('express');
var app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const rotaViagens = require('./routes/rotaViagens')
const rotaDiarios = require('./routes/rotaDiario')

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rotaViagens);
app.use('/', rotaDiarios);

module.exports = app;
