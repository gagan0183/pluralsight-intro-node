var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log('Starting http get');

var req = http.request(options, function(res) {
   console.log(res.statusCode);
   res.pipe(process.stdout);
});

req.end();
