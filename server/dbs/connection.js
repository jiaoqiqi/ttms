const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "ttms",
    port:3306
});

connection.connect( (err)=>{
    if (err) {
        console.log("err" + err.stack);
        return;
    }
    console.log("connection id " + connection.threadId);
});

module.exports = connection;