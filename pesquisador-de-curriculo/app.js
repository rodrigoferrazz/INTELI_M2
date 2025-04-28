// app.js
const express = require('express');
const path = require('path');
const routes = require('./routes');       // ← deve apontar para routes/index.js

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);                    // ← monta as rotas na raiz
app.listen(3000, () => console.log('http://localhost:3000'));