const { PostMessage, GetUserInformation } = require("../models/Slack")
const { AddItemIntoQueue } = require('../models/aws/SQS')
module.exports = {
    async SlackEvent(req, res){
        try{
            const {body} = req
            if(body['challenge']){return res.send(body['challenge'])}
            if(body['event']['type'] === "app_mention"){
                const user_info = await GetUserInformation(body['event']['user'])
                const new_item = await AddItemIntoQueue({
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
                console.log(new_item)
                return res.json({
                    "message": 'Added message on the queue'
                })
            }
        }
        catch(error){
            return res.send(error)
        }
    },
    async NewMessage(req, res){
        const {channel, message, blocks} = req.body;
        try{
            await PostMessage(channel, message, blocks)
            return res.json({
                'response': 'Done'
            })
        }
        catch(error){
            await PostMessage(process.env.SLACK_ERROR_CHANNEL, JSON.stringify(error), [])
            return res.json({
                'response': 'error'
            })
        }
    },
    async SlackSlashCommands(req, res){
        const {body} = req;
        console.log(body)
        try{
            return res.json({'message': `Received the command: '${command}' with the following message: ${body['text']}`});
        }
        catch(error){
            await PostMessage(process.env.SLACK_ERROR_CHANNEL, JSON.stringify(error), [])
            return res.json({
                'response': 'error'
            })
        }
    }
}