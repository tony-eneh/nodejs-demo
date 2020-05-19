// fetch modules to be tested
let {con, updateTable, deleteRecords, insertRecords} = require('../db-setup');
// fetch assertion library and configure to use should terms
require('chai').should();


describe('db requests', function(){
    describe('connection', function(){
        it('should successfully connect with correct parameters', function(done){
            con.connect(done);
        })
    })

    describe('CRUD requests', function(){
        it('insert hardcoded records into db', function(done){
            this.timeout(10000)
            // insertRecords.should
        })
    })
})