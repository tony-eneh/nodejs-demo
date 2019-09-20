const express = require('express');

const app = express();

const model = {
    getUsers: (callback) => {
        setTimeout(callback(new Error('some cooked up db error'), [
            { name: 'Chibuike Godson' },
            { name: 'Kingsley Clems' },
            { name: 'Ihechi Ndukwe' }
        ]), 500);
    }
}

app.get('/users',
    (req, res, next) => {
        model.getUsers((err, data) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            res.locals.users = data;
            next();
        });
    },
    (req, res, next) => {
        res.header({
            'Content-Type': 'text/html',
            'X-Special-Header': 'MEAN Stack'
        });
        res.timestamp = Date.now();
        let html = `<h1>HTML Document displaying users</h1>`;
        html += '<ul>';
        //console.dir(res.locals.users);
        res.locals.users.forEach(user => {
            html += `<li>${user.name}</li>`;
        });
        html += '</ul>';
        res.send(html);
    },
    (err, req, res, next) => {
        // console.log(err.message);
        // res.writeHead(500, 'sorry we gat a db error');
        res.send(err.message);
    }
);

app.listen(3000);