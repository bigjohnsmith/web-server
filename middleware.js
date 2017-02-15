// Use module exports to expose middleware

var middleware = {
	requireAuthentication: function(requst, response, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (request, result, next) {
		console.log(new Date().toString() + ' Request ' + request.method + ' ' + request.originalUrl);
		next();
	}
};

module.exports = middleware;