var filter = require('./filter-ls.js');

filter(process.argv[2], process.argv[3], function (error, list) {
  if(error) {
    return console.error(error);
  } else {
    list.forEach(function (file) {
      console.log(file);
    });
  }
});