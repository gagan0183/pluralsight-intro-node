var Resource = require('./resource');

var p = new Resource(9);

p.on('start', function() {
    console.log('Start event');
});

p.on('data', function(data) {
    console.log('data event : ' + data);
});

p.on('done', function(count) {
    console.log('count : ' + count); 
});
