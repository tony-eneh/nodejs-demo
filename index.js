// import * as http from 'http';
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const path = url.parse(req.url).pathname;
    if (path == '/') {
        res.write('Welcome to our home page bro<br/>');
        res.write('Check out out what we gat in our files at <a href="some-file">some-file</a>');
        res.end();
    } else if (path == '/some-file') {
        res.write('Got your request to read some-file, niggi<br/>');
        fs.readFile('some-file', (err, contents) => {
            if (err) {
                console.log('file reading error', err);
                res.end();
            } else {
                res.write('See contents of the file below:<br/>');
                res.write(contents);
                res.end();

            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Error</h1> <p>cant find the requested url</p>')
        res.end();
    }
});
server.listen(3000, (console.log('listening at port 3000')));