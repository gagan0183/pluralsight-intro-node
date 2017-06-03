var assert = require('assert');
var fun = require('./mathfun');

assert.equal(fun.evenDoublerSync(90), 180, 'Even doubler sync fail');
assert.throws(function() {
    fun.evenDoublerSync(1);
},/Odd/);

fun.evenDoubler(2, function(err, results) {
   assert.ifError(err);
   assert.equal(results, 4, "even doubler fail");
});

fun.evenDoubler(3, function(err, results) {
   assert.notEqual(err, null); 
});