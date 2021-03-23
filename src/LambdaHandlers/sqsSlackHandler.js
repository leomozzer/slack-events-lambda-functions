const { PostMessage } = require('../models/Slack');

module.exports = {
    async slack_airtable_sqs(event){
        console.log(event);
        const body = JSON.parse(event['Records'][0]['body'])
        console.log(body)
        try{
            await PostMessage(body['event']['channel'], `Received the following body: ${JSON.stringify(body)}`, [])
        }
        catch(error){
            console.log(error)
            const new_error = await PostMessage(process.env.SLACK_ERROR_CHANNEL, JSON.stringify(error), [])
            return new_error;
        }
    }
}