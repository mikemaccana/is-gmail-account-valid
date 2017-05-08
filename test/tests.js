const assert = require('assert'),
	log = console.log.bind(console),
	isGmailAccountValid = require('../index.js')

suite('checks known mail accounts', function(){

	test('known used account', function(done){
		isGmailAccountValid('mike.maccana', function(err, result){
			log(err, result)
			assert.equal(result, true)
			done()
		})
	})

	test('known unused account', function(done){
		isGmailAccountValid('dd09b480-3d4b-4579-9a23-e5d5a512f240', function(err, result){
			log(err, result)
			assert.equal(result, false)
			done()
		})
	})

})

