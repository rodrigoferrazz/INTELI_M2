// controllers/homeController.js
const db = require('../config/db');

exports.index = (req, res) => {
  res.render('pages/home');
};

exports.search = async (req, res) => {
  const termo = (req.query.query || '').trim();
  try {
    const { rows } = await db.query(
      `SELECT id, nome, area_de_interesse, idade, numero, arquivo
       FROM curriculos
       WHERE area_de_interesse ILIKE $1`,
      [`%${termo}%`]
    );
    res.render('pages/results', {
      curriculos: rows,
      query: termo
    });
  } catch (err) {
    console.error('Erro ao buscar currículos:', err);
    res.status(500).send('Erro interno ao buscar currículos.');
  }
};