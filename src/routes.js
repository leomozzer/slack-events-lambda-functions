const routes = require('express').Router();

const { SlashEvents } = require('./Controllers/slack/SlashController')
const { ShortCuts } = require('./Controllers/slack/ShortCutController')
const { SlackEvent } = require('./Controllers/slack/EventsController')
const { NewMessage } = require('./Controllers/slack/SlackController');
const { CreateUserRecord } = require('./Controllers/Users/UserController');

//Slack endpoints
routes.post('/slack/:token/postMessage', NewMessage)
routes.post('/slack/events', SlackEvent)
routes.post('/slack/slash', SlashEvents)
routes.post('/slack/shortcut', ShortCuts)

//User endpoints
routes.post('/user/create', CreateUserRecord)

routes.get("/api/status", (req, res) => {
    res.status(200).send("Running =D")
})

//CRUD database endpoint

module.exports = routes