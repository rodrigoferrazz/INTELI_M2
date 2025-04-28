const db = require('../config/db');

class Curriculo {
  static async findByArea(termo) {
    const sql = `
      SELECT id, nome, area_de_interesse, idade, numero, arquivo
      FROM curriculos
      WHERE area_de_interesse ILIKE $1
    `;
    const { rows } = await db.query(sql, [`%${termo}%`]);
    return rows;
  }
}

module.exports = Curriculo;