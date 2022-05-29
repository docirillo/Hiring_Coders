import express from 'express';

const server = express();

server.get('/status', (_, response) => {
  response.send({ status: 'ok' });
});

server.post('/authenticate', express.json(), (request, response) => {
  console.log('E-mail', request.body.email, 'Senha', request.body.password);
  response.send();
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server listening at http://${HOSTNAME}:${PORT}.`);
});
