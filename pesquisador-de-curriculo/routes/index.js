// routes/index.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// rota da home
router.get('/', homeController.index);

// rota de busca por área de interesse
router.get('/search', homeController.search);

module.exports = router;
