var express = require('express')
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(requst, response, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (request, result, next) {
		console.log(new Date().toString() + 'Request ' + request.method + ' ' + request.originalUrl);
		next();
	}
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(request, response) {
	response.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port', PORT);
});