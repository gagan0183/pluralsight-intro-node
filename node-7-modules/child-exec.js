var exec = require('child_process').exec;

var child = exec('uptime', function(err, stdout, stderr) {
   if(err) {
       console.log('error: ' + stderr);
   }
   else {
       console.log(stdout);
   }
});

console.log(child.pid);