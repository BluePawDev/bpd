/* REQUIRES: server.js */
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 7575;
var index = require('./routes/index');

/* USES: server.js */
app.use('/', index);


/* LISTEN */
app.listen(port, function() {
	console.log('Listening on port:', port);
});
