process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data) {
   process.stdout.write('data ' + data); 
});

process.stdin.on('end', function() {
    process.stderr.write('End'); 
});

process.on('SIGTERM', function() {
   process.stderr.write('Why are closing it'); 
});

console.log('node is running process ' + process.pid);