var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Counter() {
    var self = this;
    // EventEmitter.call(this); // call EventEmitter constructor 
    //Tony: discovered the above call to EventEmitter constructor is NOT compulsory.
    //      so I commented it out.
    var count = 0;
    this.start = function() {
        this.emit('start');
        setInterval(function() {
            self.emit('count', count);
            ++count;
        }, 1000);
    };
}
util.inherits(Counter, EventEmitter); // setup inheritance. Code below will also work
// Counter.prototype = new EventEmitter();

var counter = new Counter();
counter.on('start', function() {
    console.log('start event');
});
counter.on('count', function(count) {
    console.log('count = ' + count);
});
counter.start();

//emitted error events must be caught
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
process.on('uncaughtException', function(error) {
    console.error(error.message);
    process.exit(-1);
});
// emitter.emit('error', new Error('our error is bad and we feel bad'));

//Promises
var fs = require('fs');
var promise = new Promise(function(resolve, reject) {
    fs.readFile('README.txt', 'utf8', function(error, data) {
        if (error) {
            return reject(error);
        }
        resolve(data);
    });
});

promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.error(error.message);
    })
    .then(function() {
        console.log('THE END!');
    });