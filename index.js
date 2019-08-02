// import * as http from 'http';
let http = require('http');

const server = http.createServer((req, res)=>{ 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('got your request niggi');
    res.end();
});
server.listen(3000, (console.log('listening at port 3000')));