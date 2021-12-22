const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    console.log("Request for " + req.url + ' by method ' + req.method);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(req.method == 'GET'){
        var fileURL;
        if (req.url == '/') fileURL = '/index.html'; //if you don't get a request for specific file then it defaults to index
        else fileURL = req.url;

        var filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html'){
            fs.exists(filePath, (exists) => {
                if(!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end('<html><body><h1>Error 404: ' + fileURL + 
                            ' not found</h1></body></html>');
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filepath).pipe(res);
            })
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-Type','text/html');
            res.end('<html><body><h1>Error 404: ' + fileURL + 
                    ' not an HTML file</h1></body></html>');
            return;
        }
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running @ http://${hostname}:${port}`);
});