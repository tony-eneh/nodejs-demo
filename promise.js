/*
*Takes in a callback based operation and promisifies it
*/
class MyPromiseWrapper {
    constructor(callback){
        this.callback = callback;
        this.value;
        this.error;
        
        this.doAsync(callback);
    }

    resolve(data){

    }
    
    reject(error){

    }

    then(successCb){
        successCb(this.value, this.error);
        // support chainability
        return this;
    }

    catch(errorCb){
        errorCb(this.error)
        // support chainability
        return this;
    }

    finally(){

    }

}

/*
* One level deep promise wrapper for a callback based operation
* It uses prototype object to know what async task it is promisifying
*/
function promiseOperation (...arg){

    let error, data;

    this.callbackOperation(...arg, (err, dat)=>{
        if(err) error = err;
        else data = dat;
    });

    return {
        then: (cb)=>{
            cb(data, error);
            return this;
        },
        catch: (cb)=>{
            cb(error);
            return this;
        },
        finally: (cb)=>{
            cb();
        }
    }
}

// usage. eg to produce promise-based file reader
let fs = require('fs');

promiseOperation.prototype.callbackOperation = fs.readFile;

new promiseOperation(__filename, { encoding: 'utf-8' })
.then((fileContents)=>{
    console.log(fileContents);
})

