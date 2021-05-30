const { WebClient } = require('@slack/web-api');

class SlackBot {
    constructor(token) {
        this.web = new WebClient(token)
    }
}

module.exports = {
    SlackBot
}