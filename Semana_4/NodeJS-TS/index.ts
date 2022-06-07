//Lib import
import { writeFile } from 'fs';
import * as url from 'url';
import { parse } from 'query-string';
import { createServer, IncomingMessage, ServerResponse } from 'http';

//URL address definition

const port = 5000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  //Code Implementation
  let statusMessage: string;
  //URL decode
  const urlParse = url.parse(req.url ? req.url : '', true);
  //Receiving user information
  const params = parse(urlParse.search ? urlParse.search : '');

  //User Create/Update
  if (urlParse.pathname == '/create-update-user') {
    //Saving Information
    writeFile(
      `users/${params.id}.txt`,
      JSON.stringify(params),
      function (err: any) {
        if (err) throw err;
        console.log('Saved!');

        statusMessage = 'User successfully registered/updated!';

        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/plain');
        res.end(statusMessage);
      },
    );
  }
});

//Server start
server.listen(port, () => {
  console.log(`Server running on port ${port}/`);
});
