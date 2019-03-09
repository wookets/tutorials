// 
// will upload faces from the faces folder and ensure each one has a unique id
//
const AWS = require('aws-sdk')

const bucketName = process.argv[2]

const s3 = new AWS.S3({apiVersion: '2006-03-01'})
s3.createBucket({Bucket: bucketName}).promise().then( data => {
	console.log(`Bucket ${bucketName} created.`)
}).catch( err => 
    console.error(err, err.stack)
)