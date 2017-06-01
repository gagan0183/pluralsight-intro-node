var EventEmitter = require('events').EventEmitter;

var getResource = function(c) {
    var e = new EventEmitter();
    process.nextTick(function() {
       var count = 0;
       e.emit('start');
       var pr = setInterval(function() {
           e.emit('data', ++count);
           if(count === c) {
               e.emit('done', count);
               clearInterval(pr);
           }
       }, 9);
    });
    return(e);
};


var event = getResource(9);

event.on('start', function() {
    console.log('start event is start');
});

event.on('data', function(data) {
    console.log('data : ' + data);
});

event.on('done', function(count) {
   console.log('event : ' + count); 
});