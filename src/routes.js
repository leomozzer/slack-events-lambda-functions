const express = require('express');
const routes = express.Router()

const { SlackEvent, SlackSlashCommands, NewMessage } = require('./Controllers/SlackController')

routes.post('/slack/new-message', NewMessage);
routes.post('/slack/events', SlackEvent);
routes.post('/slack/slash', SlackSlashCommands);

module.exports = routes