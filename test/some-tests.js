// fetch modules to be tested
let {con, updateTable, deleteRecords, insertRecords} = require('../db-setup');
// fetch assertion library and configure to use should terms
require('chai').should();


describe('db requests', function(){
    describe('CRUD requests', function(){
        it('inserts hardcoded records into db', function(done){
            insertRecords(done);
        })

        it('updates data in db', function update(done){
            updateTable(done);
        })

        it('deletes records from db successfully', function(done){
            deleteRecords(done);
        })
    })
})