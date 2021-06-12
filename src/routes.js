const express = require('express');
const routes = express.Router()

const { SlashEvents } = require('./Controllers/slack/SlashController')
const { ShortCuts } = require('./Controllers/slack/ShortCutController')
const { SlackEvent } = require('./Controllers/slack/EventsController')
const { NewMessage } = require('./Controllers/slack/SlackController')

//Slack endpoints
routes.post('/api/slack/postMessage', NewMessage)
routes.post('/api/slack/events', SlackEvent)
routes.post('/api/slack/slash', SlashEvents)
routes.post('/api/slack/shortcut', ShortCuts)

//CRUD database endpoints

module.exports = routes