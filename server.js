var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 7575;
var index = require('./routes/index');

//uses
app.use(express.static('public'));

// app.use(bodyparser.json());

app.use('/', index);


app.listen(port, function() {
	console.log('Listening on port:', port);
}); //
