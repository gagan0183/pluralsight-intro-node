var os = require("os");

var toMb = function(f) {
    return (Math.round((f/1024/1024)*100)/100);
}

console.log(os.hostname());
console.log('avg: ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + " " + toMb(os.totalmem()));