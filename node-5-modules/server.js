var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    if(req.url === '/file.txt') {
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    }
    else {
        res.write('else');
    }
}).listen(process.env.PORT, process.env.IP);
