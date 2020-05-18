var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-southeast-1'});

var s3 = new AWS.S3({apiVersion: '2006-03-01'});

exports.handler = function(event, context) {
    // Retrieve the object
    s3.getObject({
        Bucket: "aws-practice-yaxin",
        Key: "resource/test-demo.txt"
    }, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        } else {
            var result = data.Body.toString('ascii');
            console.log("Raw text:\n" + result);
            
            s3.putObject(
                Bucket: 'aws-practice-yaxin-copy',
                Key: 'test-demo-copy.txt',
                ContentType:'binary',
                Body: Buffer.from(result, 'binary')
             }).promise();
        }
    });
    
    
};
