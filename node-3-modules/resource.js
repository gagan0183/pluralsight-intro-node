var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Resource(c) {
    var self = this;
    
    process.nextTick(function() {
        var count = 0;
        self.emit('start');
        var pr = setInterval(function() {
            self.emit('data', ++count);
            if(count === c) {
                self.emit('done', count);
                clearInterval(pr);
            }
        }, 8);
    });
}

util.inherits(Resource, EventEmitter);

module.exports = Resource;