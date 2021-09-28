const http = require('http');
const moment = require('moment');

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
    res.write('<h1>¡Ya sé Node!</h1>');
    res.end();
  }
  if (req.url === '/hw') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
    res.write('<p style="color: orange">Happy Halloween!</p>');
    res.end();
  }
  if (req.url === '/myjson') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
    });
    res.write('{ "nombre": "Espagueti", "apellido": "Volador" }');
    res.end();
  }
  if (req.url === '/timenow') {
    const hour = moment().format('HH:mm:ss');
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
    });
    res.write(hour);
    res.end();
  }

  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8',
  });
  res.write('Estos no son los androides que buscas');
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
