const myServer = require("http")
const fs = require('fs')
//var data;
const fileData = function(error, data)
{
    if (error) throw error
    const serverResult = function printServerResult(request, result)
    {
        result.write(data)
        result.end()
    }
    myServer.createServer(serverResult).listen(8000)
}

fs.readFile("D:/javaprograms/exam.java", "utf8", fileData)
