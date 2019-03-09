#!/usr/bin/env node

const { createBucket } = require('./src/s3')

require('yargs')
  .usage('$0 <cmd> [args]')
  .command('create-bucket [name]', 'Create a new s3 bucket', (yargs) => {
	yargs.positional('name', {
	  type: 'string',
	  describe: 'the name of the bucket'
	})
  }, function (argv) {
	createBucket()
  })
  .command('hello [name]', 'welcome ter yargs!', (yargs) => {
	yargs.positional('name', {
	  type: 'string',
	  default: 'Cambi',
	  describe: 'the name to say hello to'
	})
  }, function (argv) {
	console.log('hello', argv.name, 'welcome to yargs!')
  })
  .help()
  .argv