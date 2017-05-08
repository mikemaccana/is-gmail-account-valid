const superagent = require('superagent'),
	log = console.log.bind(console),
	_ = require('lodash');

module.exports = function(username, cb){

	var body = {
		"input01": {
			"Input": "GmailAddress",
			"GmailAddress": username,
			"FirstName": "",
			"LastName": ""
		},
		"Locale": "en"
	};

	superagent
	.post('https://accounts.google.com/InputValidator?resource=signup&service=mail')
	.send(body)
	.end(function(err, res){

		if ( err ) {
			cb(err);
			return;
		}

		var errorMessage = _.get(res, 'body.input01.ErrorMessage');

		if ( errorMessage ) {
			if ( errorMessage.includes('already has that username') ) {
				cb(null, true);
				return;
			}
		}
		cb(null, false);
	});
};