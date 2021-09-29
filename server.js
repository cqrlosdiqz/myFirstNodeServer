const http = require('http');
const moment = require('moment');

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  const { url } = req;
  switch (url) {
    case '/':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
      });
      res.write('<h1>¡Ya sé Node!</h1>');
      res.end();
      break;
    case '/hw':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
      });
      res.write('<p style="color: orange">Happy Halloween!</p>');
      res.end();
      break;
    case '/myjson':
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
      });
      res.write(JSON.stringify({ nombre: 'Espagueti', apellido: 'Volador' }));
      res.end();
      break;
    case '/timenow':
      const hour = moment().format('HH:mm:ss');
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
      });
      res.write(hour);
      res.end();
      break;
    default:
      res.writeHead(404, {
        'Content-Type': 'text/plain; charset=utf-8',
      });
      res.write('Estos no son los androides que buscas');
      res.end();
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
