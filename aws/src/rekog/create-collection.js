
const AWS = require('aws-sdk')

const CollectionId = 'WooketsFaces'

const rekog = new AWS.Rekognition({apiVersion: '2016-06-27', region: 'us-east-1'})

rekog.createCollection({CollectionId}).promise().then(data => {
	console.log('response', data)
})

