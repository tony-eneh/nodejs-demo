const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Uchenna90",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = "CREATE TABLE student_records (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT)";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table was successfully created");
        console.log(result);
    });
});