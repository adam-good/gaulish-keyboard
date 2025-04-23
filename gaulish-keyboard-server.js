var http = require('http');
var fs = require('fs')

http.createServer( (req, res) => {
    console.log(req.url);
    switch (req.url)
    {
        case "/style.css" :
            fs.readFile('style.css', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                return res.end();
            });
            break;
        case "/gaulish-keyboard.js" :
            fs.readFile('gaulish-keyboard.js', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.write(data);
                return res.end();
            });
            break;
        default:
            fs.readFile('index.html', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();        
            })
    }


}).listen(8080);


