# Slack Events with Lambda Functions

In certain cases, we need an assistant to help us in our daily work like adding items in an Airtable or making queries in a data table.

This project consists of doing the connection between a Slack app with an AWS Lambda Function.

## Setting up
First, you need to create a [Slack app](https://api.slack.com/start/overview) with permissions to post messages in a channel and to detect events like [app mentions](https://api.slack.com/events/app_mention). Install the app on your workspace to get the "Bot User OAuth Token", copy this token on "OAuth & Permissions" and fill the variable "SLACK_TOKEN_BOT" on serverless.yml.

### Testing
Run the following command to test if everthing is working:
```
yarn offline
```

### Deploying
Run the following command to deploy to AWS:
```
yarn deploy
```
After deploying

