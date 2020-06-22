var https = require('https');

//The url we want'
var options = {
  host: 'ven10.co',
  path: '/assessment/filter.json'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

https.request(options, callback).end();