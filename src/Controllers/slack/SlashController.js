const { GetItem, ScanTable } = require('../../models/aws/DynamoDB');
const { AddItemIntoQueue } = require('../../models/aws/SQS');
const { ModalView, EphemeralMessage, PostMessage } = require('../../models/slack/Slack');

const { WebClient } = require('@slack/web-api')

let Slack, Items;

const { IsJsonString } = require('../../handlers/handlers')
const axios = require('axios')
module.exports = {
    async SlashEvents(req, res) {
        const { body } = req;
        console.log(body)
        try {
            /*
            const new_item = await AddItemIntoQueue({
                MessageAttributes: {
                    "Command": {
                        DataType: "String",
                        StringValue: `${body['command']}`
                    }
                },
                MessageBody: `${JSON.stringify(body)}`,
                //MessageDeduplicationId: `${body['event_id']}`,  // Required for FIFO queues
                //MessageGroupId: `${body['event_id']}`,  // Required for FIFO queues
                QueueUrl: 'https://sqs.us-east-2.amazonaws.com/744380458397/slack_sqs_event'
            })
            console.log(new_item)
            return res.send('')
            */
            const item = {
                TableName: process.env.AWS_USER_TABLE,
                Key: { 'token': body['token'] }
            };
            const command_item = await GetItem(item);
            if (!command_item['Item']) {
                return res.json("Item not found")
            }
            const command = command_item['Item']['commands'].filter(item => {
                return item['name'] === body['command']
            })
            return res.json(
                {
                    blocks: command[0]['blocks']
                }
            )
        }
        catch (error) {
            console.log("Error")
            return res.json({
                "Error": JSON.stringify(error)
            })
        }
    }
}