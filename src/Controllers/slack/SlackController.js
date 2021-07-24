const { GetItem, ScanTable } = require('../../models/aws/DynamoDB');
const { AddItemIntoQueue } = require('../../models/aws/SQS');
const { ModalView, PostMessage } = require('../../models/slack/Slack');

const { WebClient } = require('@slack/web-api')

let Slack, Items;

const { IsJsonString } = require('../../handlers/handlers')

const { button } = require('../../models/slack/slack_models')

module.exports = {
    async NewMessage(req, res) {
        const { body } = req;
        const { token } = req.params
        if (!text) { return res.json("Item missing") }
        Items = await GetItem(item)
        if (!Items['Item']) {
            return res.json({ 'response': "Item not found" })
        }
        try {
            /*
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
            */
            Slack = new WebClient(Items['Item']['slack_bot_token'])
            await Slack.chat.postMessage(body)
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
    },
    MessageInfo(req, res) {
        res.json({
            'required fields': ['channel', 'text'],
            'optional': ['blocks'],
            'body example': [{ 'channel': '', 'text': 'Hello!!' }, { 'channel': '', 'text': 'Hello!!', 'blocks': [...button['blocks']] }]
        })
    }
}