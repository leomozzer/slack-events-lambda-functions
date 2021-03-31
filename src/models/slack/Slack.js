const { WebClient } = require('@slack/web-api');

const token = process.env.SLACK_BOT_TOKEN;

const web = new WebClient(token);

const {modal} = require('./slack_models')

module.exports = {
    async PostMessage(channel, text, blocks = []){
        try{
            const post_message = await web.chat.postMessage({'channel': channel, 'text': text, 'blocks': blocks, 'icon_emoji': ':robot_face:'})
            return post_message;
        }
        catch(error){
            console.log(error);
            return error
        }
    },
    async GetUserInformation(userId){
        try{
            const user = await web.users.profile.get({'user': userId})
            return user
        }
        catch(error){
            console.log(error);
            return error
        }
    },
    async ModalView(payload){
        try{
            await web.views.open({
                trigger_id: payload['trigger_id'],
                view: modal
            })
            return 'Done'
        }
        catch(error){
            console.log(error)
            return JSON.stringify(error)
        }
    }
}