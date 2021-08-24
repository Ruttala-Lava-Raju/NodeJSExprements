const fs = require("fs")
fs.readFile("D:/javaprograms/27jan21.txt", 'utf8', function(error, data){
    if(error) throw error
    console.log(data)
})