const AWS = require('aws-sdk');
require('dotenv').config()
describe('DynamoDB configuration ', () => {
    it('Check if DynamoDB exists', async () => {
        AWS.config.update({
            region: process.env.APP_REGION
        });
        const dynamoDb = new AWS.DynamoDB();
        try {
            const describe_table = await dynamoDb.describeTable({ 'TableName': process.env.AWS_USER_TABLE }).promise()
            expect(describe_table).not.toBe({})
        }
        catch (error) {
            console.log(error)
            const new_table = await dynamoDb.createTable({ 'TableName': process.env.AWS_USER_TABLE }).promise();
        }
    })
})