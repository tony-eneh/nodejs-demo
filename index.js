// import * as http from 'http';
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res)=>{ 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('got your request niggi<br/>');
    fs.readFile('some-file', (err, contents)=>{
        if(err){
            console.log('file reading error', err)
            res.end();
        }else{
            res.write('See contents of the file below:<br/>');
            res.write(contents);
            res.end();
        }
    });
});
server.listen(3000, (console.log('listening at port 3000')));