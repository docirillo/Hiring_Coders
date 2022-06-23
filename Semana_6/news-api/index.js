//Inclusão dos pacotes
const express = require('express');
const mysql = require('mysql2');

//Instancia do express
const app = express();

//Definição de porta
const port = 3000;

//Abrindo conexão com base de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'sistema_noticias',
});

connection.connect();

//Serviço de Hello World
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Serviço de busca de categorias
app.get('/news-api/v1/categorias', (req, res) => {
  //Busca categorias
  connection.query(
    'SELECT id, nome FROM sistema_noticias.categoria',
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    },
  );
});

//Serviço de busca de noticias
app.get('/news-api/v1/categorias/:categoriaId/noticias', (req, res) => {
  //Busca noticias de uma categoria
  connection.query(
    'SELECT id, titulo FROM sistema_noticias.noticia WHERE id_categoria = ' +
      req.params.categoriaId,
    function (err, rows, fields) {
      if (err) throw err;
      res.send(rows);
    },
  );
});

//Serviço de busca uma noticia
app.get(
  '/news-api/v1/categorias/:categoriaId/noticias/:noticiaId',
  (req, res) => {
    //Busca noticia
    connection.query(
      'SELECT id, titulo, conteudo FROM sistema_noticias.noticia WHERE id_categoria = ' +
        req.params.categoriaId,
      +'AND id = ' + req.params.noticiaId,

      function (err, rows, fields) {
        if (err) throw err;
        res.send(rows[0]);
      },
    );
  },
);

//Subindo servidor Node
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
