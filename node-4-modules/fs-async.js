var fs = require('fs');

if(fs.existsSync('temp')){
    console.log('directory exists, remove');
    if(fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdir('temp', function(err) {
   fs.exists('temp', function(exists) {
      if(exists) {
          process.chdir('temp');
          fs.writeFile('test.txt', 'This is a text', function(err) {
             fs.rename('test.txt', 'new.txt', function(err) {
                fs.stat('new.txt', function(err, status) {
                   console.log('size: ' + status.size);
                   fs.readFile('new.txt', function(err, data) {
                      console.log('file content : ' + data.toString()); 
                   });
                });     
             }); 
          });
      } 
   }); 
});