const http = require('http');
const fs = require('fs');
const moment = require('moment');

const host = 'localhost';
const port = 8080;

const requestsLog = (code,endpoint) => {
  const date = moment().format('DD-MM-YYYY HH:mm:ss');
  try {
    fs.appendFile('requests.log', `${date} - ${code} ${endpoint} \n`, (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
  } catch (error) {
    console.log(error);
  }
};

const server = http.createServer((req, res) => {
  const { url: endpoint } = req;
 

  switch (endpoint) {
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
      const time = moment().format('HH:mm:ss');
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
      });
      res.write(time.toString());
      res.end();
      break;
    case '/home':
      fs.readFile('public/index.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
        res.write(data);
        res.end();
      });
      break;
    case '/image':
      fs.readFile('public/images/node.png', (err, data) => {
        if (err) throw err;
        res.writeHead(200, {
          'Content-Type': 'image/png',
        });
        res.write(data);
        res.end();
      });
      break;
    default:
      res.writeHead(404, {
        'Content-Type': 'text/plain; charset=utf-8',
      });
      res.write('Estos no son los androides que buscas');
      res.end();
  }

  requestsLog(res.statusCode,endpoint);
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
