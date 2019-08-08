const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

//mongo creates the db if it doesnt already exist
MongoClient.connect(url, function(err, db) {
    const dbo = db.db('mydb');
    if (err) throw err;
    console.log("Database created!");
    dbo.createCollection('student_records', (err, collection) => {
        if (err) throw err;
        console.log("Collection created", collection);
        db.close();
    });

});