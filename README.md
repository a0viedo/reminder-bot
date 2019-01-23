# reminder-bot
It's a serverless project that allows you to configure reminders on your Slack team that are able to utilize @here or @channel.

## Setup
Create a file within the `config` directory (e.g. env.test.yaml) with your especific parameters. An example of a configuration file would look like this:

```yaml
SLACK_URL: "https://yourSlackWebHookURL.com"
SLACK_CHANNEL: "#test"
SLACK_USERNAME: "reminder-bot"
TEXT: "<!channel> this is a reminder"
CRON: "30 17 ? * WED *"
```
To get a Slack WebHook URL you can click [Add Configuration](https://slack.com/apps/A0F7XDUAZ-incoming-webhooks) on this page.

## Deployment
You can deploy your function to AWS with the following command:

```
$ npx sls deploy -s test --verbose --aws-profile yourProfile
```
You can have as many deployments you want creating a configuration file for each one and changing `-s yourFile` in the previous command.