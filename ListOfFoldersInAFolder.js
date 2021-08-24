const path = require('path');
const fs = require('fs');
const directoryPath = path.format({dir: 'D:/Training'});
fs.readdir(directoryPath, function(error, files)
{
    if(error)
    {
        return console.log('unable to scan directory: ' + error);
    }
    files.forEach(function(file) {
        console.log(file);
        
    });
});
