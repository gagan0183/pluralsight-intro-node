var mathfun = require("./mathfun");

var processResults = function(err, results, time) {
    if(err) {
        console.log("error: " + err);
    }
    else {
        console.log("The results are : " + results + " " + time);
    }
};

for (var i = 0; i < 10; i++) {
    console.log("Calling evenDoubler2 with parameter " + i);
    mathfun.evenDoubler(i, processResults);
}

console.log(".........");
console.log("The foo variable from module : " + mathfun.foo);
console.log("The maxtime variable is not export : " + mathfun.maxTime)