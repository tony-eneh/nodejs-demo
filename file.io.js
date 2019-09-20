var fs = require('fs');
var data;

//below uses node's __filename variable to read own source code
try {
    data = fs.readFileSync(__filename, { encoding: 'utf-8' });
    console.log(data);
} catch (error) {
    console.error(error.message);
}

//reading and writing from and to process.stdin and process.stdout streams
//noticed code still works with pause() and resume() lines commented out
process.stdin.once('data', function(data) {
    process.stdout.write('Hello ' + data.toString());
    // process.stdin.pause();
});
process.stdout.write('What is your name? ');
// process.stdin.resume();