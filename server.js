var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

var routes = require('./api/routes/ytdl-routes');
routes(app);

app.use('/music/', express.static('music'));

app.listen(port);

console.log("Restful api started on port: " + port);
