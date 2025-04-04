const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (page == '/api') {
        if ('string' in params) {
            const oGString = params['string']
            const formattedString = oGString.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
            if (params['string'] == '') {
                const objToJson = {
                   msg: "please input a value"
                }
                res.end(JSON.stringify(objToJson));
            }
            else if (formattedString === [...formattedString].reverse().join('')) {
                const objToJson = {
                    msg: `${oGString} is a palindrome.`
                 }
                 res.end(JSON.stringify(objToJson));
            } else {
                const objToJson = {
                    msg: `${oGString} is not a palindrome`
                }
                res.end(JSON.stringify(objToJson));
            }
        }
        
    }//else if
    else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/css/normalize.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/css/layout.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else {
        // page not found
        res.writeHead(404, `Page not found: ${page}`)
        console.log('Something went wrong...');
        res.end();

    }
});

server.listen(8000);