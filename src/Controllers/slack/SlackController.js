const { GetItem, ScanTable } = require('../../models/aws/DynamoDB');
const { AddItemIntoQueue } = require('../../models/aws/SQS');
const { ModalView, EphemeralMessage, PostMessage } = require('../../models/slack/Slack');

const { WebClient } = require('@slack/web-api')

let Slack, Items;

const { IsJsonString } = require('../../handlers/handlers')
const axios = require('axios')

module.exports = {
    async NewMessage(req, res) {
        const { body } = req;
        try {
            await AddItemIntoQueue({
                MessageAttributes: {
                    "token": {
                        DataType: "String",
                        StringValue: body['token']
                    }
                },
                MessageBody: `${JSON.stringify(body)}`,
                //MessageDeduplicationId: `${body['event_id']}`,  // Required for FIFO queues
                //MessageGroupId: `${body['event_id']}`,  // Required for FIFO queues
                QueueUrl: process.env.STANDART_QUEUE_URL
            })
            return res.json({
                'response': 'Done'
            })
        }
        catch (error) {
            console.log("Error: ", JSON.stringify(error))
            //await PostMessage(process.env.SLACK_ERROR_CHANNEL, JSON.stringify(error), [])
            return res.json({
                'response': 'error'
            })
        }
    }
}