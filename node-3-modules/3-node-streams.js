var request = require('request');

var p = request('http://www.pluralsight.com');

p.on('data', function(data) {
    console.log('data : ' + data);
});

p.on('end', function() {
    console.log('comp');
});