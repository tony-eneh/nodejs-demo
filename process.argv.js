process.argv.forEach(function(value, index, args) {
    console.log('process.argv[' + index + '] = ' + value);
});

//this file is supposed to print command line arguments used to 
// launch this node file
//however I discovered somthing while running it:
//the name of this file is process.argv.js but node process.argv
// also worked. Conclusion = .js extension is not important