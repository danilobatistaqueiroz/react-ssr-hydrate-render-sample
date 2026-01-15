// server.js

let http = require('http');
let fs   = require('fs');

let renderPage       = fs.readFileSync('render.html');
let hydratePage      = fs.readFileSync('hydrate.html');
let componentsSource = fs.readFileSync('components.js');

http.createServer((req, res) => {
  if (req.url == '/components.js') {
    // artificial delay
    setTimeout(() => {
    res.setHeader('Content-Type','text/javascript');
    res.end(componentsSource);
    }, 3000);
  } else if (req.url == '/render.html') {
    res.end(renderPage);
  } else {
    res.end(hydratePage);
  }
}).listen(8080,'127.0.0.1');