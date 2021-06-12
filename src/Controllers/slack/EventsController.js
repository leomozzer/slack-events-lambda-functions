const { GetItem, ScanTable } = require('../../models/aws/DynamoDB');
const { AddItemIntoQueue } = require('../../models/aws/SQS');
const { ModalView, EphemeralMessage, PostMessage } = require('../../models/slack/Slack');

const { WebClient } = require('@slack/web-api')

let Slack, Items;

const { IsJsonString } = require('../../handlers/handlers')
const axios = require('axios')

module.exports = {
    async SlackEvent(req, res) {
        try {
            const { body } = req
            console.log(body)
            let user_info;
            if (body['challenge']) { return res.send(body['challenge']) }
            switch (body['event']['type']) {
                case 'app_mention':
                    user_info = await GetUserInformation(body['event']['user'])
                    AddItemIntoQueue({
                        MessageAttributes: {
                            "UserID": {
                                DataType: "String",
                                StringValue: `${body['event']['user']}`
                            },
                            "Author": {
                                DataType: "String",
                                StringValue: user_info['profile']['real_name']
                            },
                            "Message": {
                                DataType: "String",
                                StringValue: `${body['event']['text']}`
                            }
                        },
                        MessageBody: `${JSON.stringify(body)}`,
                        //MessageDeduplicationId: `${body['event_id']}`,  // Required for FIFO queues
                        //MessageGroupId: `${body['event_id']}`,  // Required for FIFO queues
                        QueueUrl: process.env.STANDART_QUEUE_URL
                    })
                    res.json({
                        "message": 'Added message on the queue'
                    })
                    break;
                case 'message':
                    //await PostMessage(body['event']['channel'], 'New message')
                    res.json("Message received")
                    break;
                default:
                    res.send('Default')
                    break;

            }
            //return res.send('')
        }
        catch (error) {
            return res.send(error)
        }
    }
}