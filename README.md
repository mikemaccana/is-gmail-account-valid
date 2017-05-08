## Find out if a gmail address is used or not

A simple module verify whether a gmail address is valid. Made after I read [x0rz's article](https://blog.0day.rocks/abusing-gmail-to-get-previously-unlisted-e-mail-addresses-41544b62b2) on the topic and the techique used.

[![CircleCI](https://circleci.com/gh/mikemaccana/is-gmail-account-valid.svg?style=svg)](https://circleci.com/gh/mikemaccana/is-gmail-account-valid)

## Credit / how this works.

This is only a couple of minutes work. All credit belongs to [x0rz](https://blog.0day.rocks).

## Usage

	const isGmailAccountValid = require('../index.js')

	isGmailAccountValid('mike.maccana', function(err, result){
		console.log(err, result)
	})

`result` will be `true` for valid accounts and `false` for invalid accounts.