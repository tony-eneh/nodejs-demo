// import * as http from 'http';
const http = require('http');
const fs = require('filesystem');
const url = require('url');

const server = http.createServer((req, res)=>{ 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('got your request niggi');
    res.end();
});
server.listen(3000, (console.log('listening at port 3000')));