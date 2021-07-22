# Serverless NodeJS connector

This project consists in create a serverless application using nodejs to work as a fast connector.

## Requirements
* NodeJS
* Yarn/NPM
* AWS account
* AWS CLI
* [Serverless](https://www.serverless.com/)
* Slack Workspace

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
After deploying, you'll receive a link from your brand new API Gateway. Copy the link that has the "slack" endpoint. Goes back to your Slack app, click on Event Subscriptions, enable the slack events, paste the link that you copied and add "/events" (e.g. "https://zfajjr6h56.execute-api.REGION.amazonaws.com/dev/slack/events"). You also will need to configure the role of your stack to allow getting and read items from the SQS, so add the policy "AmazonSQSFullAccess" in the role. Create a new standard queue in the same region of your stack, copy the URL from the queue and add it into the serverless.yml file. Add the lambda function slack_airtable_sqs as a trigger from the sqs queue that you have created. Create a new message in a Slack channel and mark up the app.

For the slash command, access the "Slash Commands" item and add a new command. In the "Request URL" add the URL from our app, but as endpoint add "/slash" (e.g. "https://zfajjr6h56.execute-api.REGION.amazonaws.com/dev/slack/slash"). After creating a new command you'll be able to use the "/" with the name of the command that you've created.

## DevOps on AWS

[Tutorial: Use full clone with a CodeCommit pipeline source](https://docs.aws.amazon.com/codepipeline/latest/userguide/tutorials-codecommit-gitclone.html)
On Github, you can create a communication between your account from git and AWS. Then on Step 2 item 6 you can select Github as a provider, add your repository, and the brach.
On the buildspec file, add the code present on the buildspec.yml

## Documentation

* [Slack](docs/Slack.md)

## Resources

[Slack Dialogs](https://api.slack.com/dialogs)

[Modals with Slack & Express](https://www.javascriptjanuary.com/blog/building-a-slack-app-with-express-and-the-node-sdk)