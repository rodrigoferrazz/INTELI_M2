# Aula 05 - Cristiano Benites - 15/maio

## Models

Faz a integração com o banco de dados, portanto todas as funcionalidades que serão feitas, será comunicada para o banco de dados pelo models.

Por exemplo, em curso.js existe a possibilidade de criar, atualizar e deletar a informação que está no DB, assim como está no código abaixo

````js
  async create(nome) {
    const query = 'INSERT INTO curso (nome) VALUES ($1) RETURNING *';
    const result = await db.query(query, [nome]);
    return result.rows[0];
  },
  // Função no model para atualizar o nome de um curso pelo ID
  async update(id, nome) {
    const query = 'UPDATE curso SET nome = $1 WHERE id = $2 RETURNING *';
    const result = await db.query(query, [nome, id]);
    return result.rows[0];
  },
  // Função no model que remove um curso do banco de dados pelo ID
  async delete(id) {
    await db.query('DELETE FROM curso WHERE id = $1', [id]);
  }
  ````

## Controller

Essa etapa do código será responsável por receber a ação do usuário (CRUD) e comunicar com o models para registrar o CRUD no DB.

Exemplo:

````js
// Criar novo professor
exports.create = async (req, res) => {
  const { nome, email } = req.body;
  await Professor.create(nome, email);
  res.redirect('/professores');
};
````

## Endpoints

Os endpoints (GET, POST, PUT, DELETE) são basicamente as rotas das ações que o usuário está executando, ou seja, quando o usuário deseja deletar um professor, o sistema rodará o código abaixo:

````js
router.post('/delete/:id', controller.delete);
````