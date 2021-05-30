// const { WebClient } = require('@slack/web-api');

// const token = process.env.SLACK_BOT_TOKEN;

// const web = new WebClient(token);

const { modal } = require('./slack_models')

const { SlackBot } = require('./CreateBot');

let new_slackbot = undefined, post_message = undefined;

module.exports = {
    async PostMessage(channel, text, blocks = [], token) {
        try {
            new_slackbot = new SlackBot(token);
            post_message = await new_slackbot.web.chat.postMessage({ 'channel': channel, 'text': text, 'blocks': blocks, 'icon_emoji': ':robot_face:' })
            return post_message;
        }
        catch (error) {
            console.log(error);
            return error
        }
    },
    async GetUserInformation(userId, token) {
        try {
            new_slackbot = new SlackBot(token);
            const user = await new_slackbot.web.users.profile.get({ 'user': userId })
            return user
        }
        catch (error) {
            console.log(error);
            return error
        }
    },
    async ModalView(payload) {
        try {
            new_slackbot = new SlackBot(token);
            await new_slackbot.web.views.open({
                trigger_id: payload['trigger_id'],
                view: modal
            })
            return 'Done'
        }
        catch (error) {
            console.log(error)
            return JSON.stringify(error)
        }
    }
}