var express = require('express')
var app = express();

var fs = require("fs");

var aasa = fs.readFileSync(__dirname + '/starter/apple-app-site-association');
app.get('/apple-app-site-association', function(req, res, next) {
     res.set('Content-Type', 'application/pkcs7-mime');
     res.status(200).send(aasa);
});

app.use(express.static(__dirname + '/starter'));
app.listen(process.env.PORT || 3000);