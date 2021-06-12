const { GetItem, ScanTable } = require('../../models/aws/DynamoDB');
const { AddItemIntoQueue } = require('../../models/aws/SQS');
const { ModalView, EphemeralMessage, PostMessage } = require('../../models/slack/Slack');

const { WebClient } = require('@slack/web-api')

let Slack, Items;

const { IsJsonString } = require('../../handlers/handlers')
const axios = require('axios')

module.exports = {
    async ShortCuts(req, res) {
        const { body } = req;
        console.log(body)
        try {
            const payload = IsJsonString(body['payload'])
            console.log(payload)
            const item = {
                TableName: process.env.AWS_USER_TABLE,
                Key: { 'token': payload['token'] }
            };
            let shortcut_items, shortcut;
            switch (payload['type']) {
                case 'view_submission':
                    Items = await GetItem(item)
                    if (!Items['Item']) {
                        return res.json("Item not found")
                    }
                    shortcut = Items['Item']['commands'].find(item => {
                        return item['name'] === payload['view']['callback_id']
                    })
                    if (shortcut['notify']) {
                        Slack = new WebClient(Items['Item']['slack_bot_token'])
                        await Slack.chat.postEphemeral({ channel: payload['user']['id'], 'user': payload['user']['id'], 'text': `User input: ${JSON.stringify(payload['view']['state'])}` })
                        //await EphemeralMessage(payload['user']['id'], payload['user']['id'], `User input: ${JSON.stringify(payload['view']['state'])}`)
                    }
                    res.send('')
                    //Response from the Modal interaction or any button present on the response
                    break;
                case 'shortcut':
                    //Opens interactive views as modals
                    Items = await GetItem(item)
                    if (!Items['Item']) {
                        return res.json("Item not found")
                    }
                    shortcut = Items['Item']['commands'].find(item => {
                        return item['name'] === payload['callback_id']
                    })
                    Slack = new WebClient(Items['Item']['slack_bot_token'])
                    await Slack.views.open({
                        "trigger_id": payload['trigger_id'],
                        "view": shortcut['modal']
                    })
                    res.send('')
                    /*
                    ModalView(payload, shortcut[0]['modal'])
                        .then(() => { res.send('') })
                        .catch(error => { console.log("Error: ", JSON.stringify(error)); res.send(error) })
                    */
                    break;
                case 'block_actions':
                    Items = await GetItem(item)
                    if (!Items['Item']) {
                        return res.json("Item not found")
                    }
                    let commands = Items['Item']['commands'].find(item => {
                        let filter_actions = payload['actions'].find(action => {
                            return item['name'] === action['value']
                        })
                        return filter_actions
                    })
                    if (!commands['name']) {
                        res.json("Action not found");
                        break
                    }
                    Slack = new WebClient(Items['Item']['slack_bot_token'])
                    if (commands['modal']) {
                        await Slack.views.open({
                            "trigger_id": payload['trigger_id'],
                            "view": commands['modal']
                        })
                    }
                    res.send('')
                    break;
                /*
                await axios.post(payload['response_url'], {
                    "text": 'JSON.stringify(payload)',
                    blocks: [{
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "This is a section block with a button."
                        },
                        "accessory": {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Click Me",
                                "emoji": true
                            },
                            "value": "click_me_123",
                            "action_id": "button-action"
                        }
                    }]
                })
                */
                //await EphemeralMessage(payload['channel']['id'], payload['user']['id'], JSON.stringify(payload))
                default:
                    res.json('Something went wrong with the code, please contact the developer team')
                    break;
            }
        }
        catch (error) {
            console.log("Error :", error)
            res.send("Error")
        }
    }
}