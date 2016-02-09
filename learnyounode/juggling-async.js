var http = require('http');

var data1='', data2='', data3='';

var async = function() {
  if(data1 && data2 && data3) {
    console.log(data1);
    console.log(data2);
    console.log(data3);
  }
};

http.get(process.argv[2], function (response) {
  var string = "";
  response.on("data", function (data) {
    string = string + data.toString();
  });
  response.on("end", function () {
    data1 = string;
    async();
  });
});

http.get(process.argv[3], function (response) {
  var string = "";
  response.on("data", function (data) {
    string = string + data.toString();
  });
  response.on("end", function () {
    data2 = string;
    async();
  });
});

http.get(process.argv[4], function (response) {
  var string = "";
  response.on("data", function (data) {
    string = string + data.toString();
  });
  response.on("end", function () {
    data3 = string;
    async();
  });
});