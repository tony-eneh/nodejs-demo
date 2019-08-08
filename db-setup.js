const mysql = require('mysql');


const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Uchenna90",
    database: "mydb"
});

const deleteRecords = () => {

};

const insertRecords = () => {
    const sql = "INSERT INTO student_records (name, age) VALUES ?";
    const values = [
        ['ike anyika', 23],
        ['odion ighalo', 27],
        ['samuel chukwueze', 20],
        ['taribo west', 40],
        ['amechi muonagor', 52],
        ['osita iheme', 37],
        ['tyler perry', 47]
    ];
    con.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log('Query was successfully executed', result);
        deleteRecords();
    });
};

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = "CREATE TABLE IF NOT EXISTS student_records (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT)";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table was successfully created");
        insertRecords();
        console.log(result);
    });
});