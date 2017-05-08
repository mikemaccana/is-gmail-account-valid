const superagent = require('superagent');

module.exports = function(username, cb){
	superagent
	.get(`https://mail.google.com/mail/gxlu?email=${username}`)
	.end(function(err, res){
		if ( err ) {
			cb(err)
			return
		}
		const exists = res.headers.hasOwnProperty('set-cookie')
		cb(null, exists)
	})
}