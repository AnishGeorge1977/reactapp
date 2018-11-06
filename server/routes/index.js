const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  // API routes
  //console.log("<----------------------Inside Index.js File--------->");
  fs.readdirSync(__dirname + '/api/').forEach((file) => {
    //console.log("File-->"+file);
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};
