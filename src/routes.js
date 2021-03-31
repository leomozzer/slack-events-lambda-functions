const express = require('express');
const routes = express.Router()

const { SlackEvent, SlackSlashCommands, NewMessage, ShortCuts } = require('./Controllers/SlackController')

routes.post('/slack/new-message', NewMessage);
routes.post('/slack/events', SlackEvent);
routes.post('/slack/slash', SlackSlashCommands);
routes.post('/slack/shortcut', ShortCuts)

module.exports = routes