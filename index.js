const request = require('request-promise');

module.exports.handler = async () => {
  console.log('sending message to Slack');
  await postMessage(process.env.TEXT);
  console.log(`message posted to Slack on channel ${process.env.SLACK_CHANNEL}`);
};

function postMessage(text){
  return request({
    method: 'POST',
    uri: process.env.SLACK_URL,
    body: {
      channel: process.env.SLACK_CHANNEL,
      username: process.env.SLACK_USERNAME,
      'icon_emoji': ':robot_face:',
      text
    },
    json: true
  });
}