// 
// will upload faces from the faces folder and ensure each one has a unique id
//
const AWS = require('aws-sdk')
const fs = require('fs')

const bucketName = `ml-faces-wookets`
const imagesDir = `${__dirname}/images`

const s3 = new AWS.S3({apiVersion: '2006-03-01'})
s3.createBucket({Bucket: bucketName}).promise().then( data => {
	// get a list of images 
	fs.readdirSync(imagesDir).forEach( file => {
		// upload them to s3
		console.log(file);
	})
	const keyName = 'hello_world.txt'
    // Create params for putObject call
    // const objectParams = {Bucket: bucketName, Key: keyName, Body: fs.createReadStream(version.path) }
    // // Create object upload promise
	// s3.putObject(objectParams).promise().then( data => {
	// 	console.log(`Successfully uploaded data to ${bucketName}/${keyName}`)
	// })
}).catch( err => 
    console.error(err, err.stack)
)