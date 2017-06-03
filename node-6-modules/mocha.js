var should = require('should');
var fun = require('./mathfun');

describe('MathFun', function() {
    describe('when used synchronously', function() {
        it('should double even numbers correctly', function() {
            fun.evenDoublerSync(990).should.equal(1980);
        });
        
        it('should throw on odd numbers', function(done) {
           (function(){fun.evenDoublerSync(3)}).should.throw(/Odd/);
           done();
        });
    });
    
    describe('when used asynchrously', function() {
        it('should double even numbers correctly', function(done) {
            fun.evenDoubler(990, function(err, results) {
                should.not.exist(err);
                results.should.equal(1980);
                done();
            });
        });
        
        it('should throw on odd number', function(done) {
            fun.evenDoubler(3, function(err, results) {
                should.exist(err);
                should.not.exist(results);
                done(); 
            });           
        });
    });
});