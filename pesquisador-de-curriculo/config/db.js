// config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  host:     process.env.DB_HOST,
  port:     Number(process.env.DB_PORT),
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl:      process.env.DB_SSL === 'true'
              ? { rejectUnauthorized: false }
              : false,
});

module.exports = pool;
