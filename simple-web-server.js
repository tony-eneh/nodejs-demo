var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {
    // A parsed url to work with in case there are parameters
    var _url;
    // In case the client uses lower case for methods.
    req.method = req.method.toUpperCase();
    console.log(req.method + ' ' + req.url);
    if (req.method !== 'GET') {
        res.writeHead(501, {
            'Content-Type': 'text/plain'
        });
        return res.end(req.method + ' is not implemented by this server.');
    }
    if (_url = /^\/employees$/i.exec(req.url)) {
        // return a list of employees
        res.writeHead(200);
        return res.end('employee list');
    } else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
        // find the employee by the id in the route
        res.writeHead(200);
        return res.end('a single employee');
    } else if (_url = /^\/[A-Za-z\-\_]+.mjs$/i.exec(req.url)) {
        const requestedFile = path.join(process.env.PWD, _url[0]);
        res.writeHead(200, {
            'Content-Type': 'text/javascript'
        });
        console.log(requestedFile);
        fs.access(requestedFile, (err) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    return res.end('requested js module does not exist on this server');
                }
                throw err;

            }
            //_url is an array, its first member (_url[0]) is where our matched output is
            return fs.createReadStream(requestedFile).pipe(res);
        });
    } else {
        // try to send the static file
        res.writeHead(200);
        return res.end('static file maybe');
    }
}).listen(process.env.PORT || 1337);