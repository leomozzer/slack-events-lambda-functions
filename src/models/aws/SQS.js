// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region we will be using
AWS.config.update({region: process.env.APP_REGION});
// Create SQS service client
const SQS = new AWS.SQS({apiVersion: '2012-11-05'});

module.exports = {
    async AddItemIntoQueue(queue_params){
        try{
            const new_item = await SQS.sendMessage(queue_params).promise();
            return new_item;
        }
        catch(error){
            return JSON.stringify(error, null, 2)
        }
    }
}