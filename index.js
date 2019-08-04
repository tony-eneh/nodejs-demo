// import * as http from 'http';
const http = require('http');
const fs = require('fs');
const url = require('url');
const formidable = require('formidable');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const path = url.parse(req.url).pathname;
    if (path == '/') {
        res.write('<h1>Welcome to our home page bro</h1><br/>');
        res.write('<p> Visit <a href="some-file">some-file</a> to see the contents of our secret file.</p> <p> OR you can upload your own file using the form below.</p>');
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
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
    } else if ('/filetoupload') {
        const form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = '/home/nwa_eneh/Documents/software-stuff/projects/nodejs-demo/uploaded-files/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Error</h1> <p>cant find the requested url</p>')
        res.end();
    }
});
server.listen(3000, (console.log('listening at port 3000')));