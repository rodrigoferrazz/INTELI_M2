const express = require('express');
const path = require('path');
const routes = require('./routes/index.js');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3001, () => console.log('http://localhost:3001')); // estava dando um problema com ocupação da porta 3000

module.exports = app;
