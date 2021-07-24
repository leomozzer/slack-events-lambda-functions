//Modules
const { PutItem } = require('./aws/DynamoDB');

//Classes
const SlackModel = require("./slack/SlackModel");

class NewSlackBot {
    constructor(token, slack_bot_token, commands) {
        this.token = token;
        this.slack_bot_token = slack_bot_token
        const slack_model = new SlackModel;
        this.commands = slack_model['model']['commands']
    }
}

const table_params = {
    TableName: process.env.AWS_USER_TABLE
}

module.exports = {
    async CreateNewUser(token, slack_bot_token) {
        try {
            table_params["Item"] = new NewSlackBot(token, slack_bot_token);
            const put_item = await PutItem(table_params);
            console.log(table_params)
            return put_item['$response']
        }
        catch (error) {
            console.log(error)
            return "Error"
        }
    }
}