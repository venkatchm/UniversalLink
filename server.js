var express = require('express')
var app = express();

// var serveStatic = require('serve-static')

var fs = require("fs");

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

var aasa = fs.readFileSync(__dirname + '/starter/apple-app-site-association');
app.get('/apple-app-site-association', function(req, res, next) {
     res.set('Content-Type', 'application/pkcs7-mime');
     res.status(200).send(aasa);
});


// app.get('/apple-app-site-association',function(req,res){
// 	res.send([{"success":"yes"}]);
// });


app.use(express.static(__dirname + '/starter'));
// app.use(serveStatic(__dirname + '/starter'));
app.listen(process.env.PORT || 3000);