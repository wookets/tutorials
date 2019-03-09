
const AWS = require('aws-sdk')

const bucketName = `ml-faces-wookets`
// aws:rekognition:us-east-1:411663541300:collection/WooketsFaces

const s3 = new AWS.S3({apiVersion: '2006-03-01'})
const rekog = new AWS.Rekognition({apiVersion: '2016-06-27', region: 'us-east-1'})

s3.listObjectsV2({ Bucket: bucketName }).promise().then( data => {
	console.log('data', data.Contents)

	data.Contents.filter( obj => {
		return obj.Size > 0
	}).forEach( obj => {
		const params = {
			CollectionId: "WooketsFaces", 
			DetectionAttributes: [], 
			ExternalImageId: obj.Key.replace('/', '_'), 
			Image: {
				S3Object: {
					Bucket: bucketName, 
					Name: obj.Key
				}
			}
		}
		console.log(`indexing ${obj.Key} from ${bucketName}`)
		rekog.indexFaces(params).promise().then( data => {
			console.log('response', data)
		}).catch( err => {
			console.error(err)
		})
	})

})

// $iterator = $client->listObjects(array(
//     'Bucket' => 'wcso-let-faces',
//         "MaxKeys" => 50,
//         "Marker"=>$previousMarker  //This marker was saved in a database. It allowed me to know where in the list I was during indexing.
// ));

// foreach ($iterator["Contents"] as $object) {
// 	$result = $rekog->indexFaces([
//             'CollectionId' => 'COLLECTIONID', // REQUIRED
//             'ExternalImageId' => $object['Key'],
//             'Image' => [
//                 'S3Object' => [
//                     'Bucket' => 'BUCKETNAME',
//                     'Name' => $object['Key'],
//                 ],
//             ],
//         ]);
// }