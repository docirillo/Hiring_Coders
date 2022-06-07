// Incluindo as bibliotecas
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');
const { stringify } = require('querystring');

//Definição de endereço / URL
const hostname = '127.0.0.1'; //localhost
const port = 3000;

// Implementação da regra de negócio
const server = http.createServer((req, res) => {
  let resposta;
  //decodificacao da url
  const urlParse = url.parse(req.url, true);
  //Receber informacoes do usuario
  const params = queryString.parse(urlParse.search);

  //Criar e Atualizar usuario
  if (urlParse.pathname == '/criar-atualizar-usuario') {
    //Salvar as informações
    fs.writeFile(
      `users/${params.id}.txt`,
      JSON.stringify(params),
      function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
      },
    );
    resposta = 'Usuario cadastrado/atualizado com sucesso!';
  }
  //Selecionar usuario
  else if (urlParse.pathname == '/buscar-usuario') {
    fs.readFile(`users/${params.id}.txt`, function (err, data) {
      resposta = err ? 'Usuario nao encontrado' : data;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(resposta);
    });
  }

  //Remover usuario
  else if (urlParse.pathname == '/excluir-usuario') {
    fs.unlink(`users/${params.id}.txt`, function (err) {
      resposta = err
        ? 'Usuario nao encontrado'
        : 'Usuario excluido com sucesso!';
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  }
});

//Execução do servidor
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Neste modelo de atualização, sempre será necessário passar todos os dados.

//localhost:3000/criar-atualizar-usuario?nome=daniel&idade=33&id=1
//localhost:3000/criar-atualizar-usuario?nome=daniel&idade=32&id=1
//localhost:3000/buscar-usuario?id=1
//localhost:3000/excluir-usuario?id=1
