# Slack interactions documentation

## Events
Docs:
* [API Event Types](https://api.slack.com/events)
* [Using the Slack Events API](https://api.slack.com/apis/connections/events-api)

path: `/api/slack/events`

File: `src/Controllers/slack/EventsController.js`

data
````
body: {
  token: 'some_token',
  team_id: 'ABCTED5JAV',
  api_app_id: 'A01PBLTKFH7',
  event: {
    client_msg_id: 'a046557c-75b9-472a-aa9b-762a053498a0',
    type: 'app_mention',
    text: '<@U01PNSZNV4Y> Hello',
    user: 'UED5A17CA',
    ts: '1621709666.001800',
    team: 'ABCTED5JAV',
    blocks: [ [Object] ],
    channel: 'C01PNSJ1NC8',
    event_ts: '1621709666.001800'
  },
  type: 'event_callback',
  event_id: 'Ev022AU3J3QF',
  event_time: 1621709666,
  authorizations: [
    {
      enterprise_id: null,
      team_id: 'TED5JAVPH',
      user_id: 'U01PNSZNV4Y',
      is_bot: true,
      is_enterprise_install: false
    }
  ],
  is_ext_shared_channel: false,
  event_context: '2-app_mention-ABCTED5JAV-A01PBLTKFH7-C01PNSJ1NC8'
}
````

## Slash
Docs:
* [Enabling interactivity with Slash Commands](https://api.slack.com/interactivity/slash-commands#:~:text=Best%20Practices-,What%20are%20Slash%20Commands%3F,context%20provided%20by%20that%20payload.)

path: `/api/slack/slash`

File: `src/Controllers/slack/SlashController.js`

data
````
body: {
  token: 'some_token',
  team_id: 'ABCTED5JAV',
  team_domain: 'workspace',
  channel_id: 'D01NS991VML',
  channel_name: 'directmessage',
  user_id: 'UED5A17CA',
  user_name: 'jane.doe',
  command: '/button',
  text: '',
  api_app_id: 'A01PBLTKFH7',
  is_enterprise_install: 'false',
  response_url: 'https://hooks.slack.com/commands/ABCTED5JAV/2099885728932/qbthPMfj3OuI9WXWyWSCcebs',
  trigger_id: '2078951381607.489188369799.f32d70d0d04ae6b468f3b78c546ee6c7'
}
````
## Shortcut
Docs: 
* [Creating and handling shortcuts](https://api.slack.com/interactivity/shortcuts/using)

path: `/api/slack/shortcut`

File: `src/Controllers/slack/ShortCutController.js`

### shortcut
data
````
payload:{
  type: 'shortcut',
  token: 'some_token',
  action_ts: '1621708572.190804',
  team: { id: 'ABCTED5JAV', domain: 'workspace' },
  user: { id: 'UED5A17CA', username: 'jane.doe', team_id: 'ABCTED5JAV' },
  is_enterprise_install: false,
  enterprise: null,
  callback_id: 'some_name',
  trigger_id: '2086937171158.489188369799.807f7e720434f4ef19986cc01e39f155'
}
````

### block_actions
data
````
payload: {
  type: 'block_actions',
  user: {
    id: '12345',
    username: 'jane.doe',
    name: 'jane.doe',
    team_id: 'ABCTED5JAV'
  },
  api_app_id: 'A01PBLTKFH7',
  token: 'some_token',
  container: {
    type: 'message',
    message_ts: '1621691106.001600',
    channel_id: 'C01PNSJ1NC8',
    is_ephemeral: false
  },
  trigger_id: '2078915042311.489188369799.09f63ab0959a0338bf2815b6be4fc5af',
  team: { id: 'ABCTED5JAV', domain: 'workspace' },
  enterprise: null,
  is_enterprise_install: false,
  channel: { id: 'C01PNSJ1NC8', name: 'integrations-tests' },
  message: {
    bot_id: 'B01NS9918G6',
    type: 'message',
    text: 'Hello from Slack',
    user: 'U01PNSZNV4Y',
    ts: '1621691106.001600',
    team: 'ABCTED5JAV',
    blocks: [ [Object], [Object], [Object], [Object], [Object] ]
  },
  state: { values: {} },
  response_url: 'https://hooks.slack.com/actions/ABCTED5JAV/2090607380277/ODja2L2Hh8wqRq5sArF0TDtY',
  actions: [
    {
      action_id: 'ZhI',
      block_id: 'OsD',
      text: [Object],
      value: 'btn',
      style: 'primary',
      type: 'button',
      action_ts: '1621706161.454146'
    }
  ]
}
````

### view_submission
data
````
{
  type: 'view_submission',
  team: { id: 'ABCTED5JAV', domain: 'workspace' },
  user: {
    id: '12345',
    username: 'jane.doe',
    name: 'jane.doe',
    team_id: 'ABCTED5JAV'
  },
  api_app_id: 'A01PBLTKFH7',
  token: 'some_token',
  trigger_id: '2086937241542.489188369799.99bd7053273431cd2b25a458bb6380ec',
  view: {
    id: 'V02349QSWHF',
    team_id: 'ABCTED5JAV',
    type: 'modal',
    blocks: [ [Object], [Object], [Object] ],
    private_metadata: '',
    callback_id: 'conti_tracker',
    state: { values: [Object] },
    hash: '1621708573.DF0s9Rqv',
    title: { type: 'plain_text', text: 'This is a sample', emoji: true },
    clear_on_close: false,
    notify_on_close: false,
    close: { type: 'plain_text', text: 'Cancel', emoji: true },
    submit: { type: 'plain_text', text: 'Submit', emoji: true },
    previous_view_id: null,
    root_view_id: 'V02349QSWHF',
    app_id: 'A01PBLTKFH7',
    external_id: '',
    app_installed_team_id: 'ABCTED5JAV',
    bot_id: 'B01NS9918G6'
  },
  response_urls: [],
  is_enterprise_install: false,
  enterprise: null
}
````