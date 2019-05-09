var express = require("express");
var app = express();
var path = require("path");
var port = 80;
var bodyparser = require('body-parser');

app.use(bodyparser());
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, function() {
  console.log("Express server is listening on port:" + port);
});

