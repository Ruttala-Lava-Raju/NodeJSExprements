var MYSQL = require('mysql');
var dbConn = MYSQL.createConnection({
    host: "165.22.14.77",
    user: "b27",
    password: "b27",
    database: "Courses"
});

dbConn.connect(function(error){
    if(error) throw error;
    dbConn.query("select * from Syllabuses", resultCallBack)
    if(error) throw error;
});

const resultCallBack = function(error, result, fields)
{
    console.log(result);
}