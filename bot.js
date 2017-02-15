if (!process.env.SLACK_API_TOKEN) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

const Botkit = require('Botkit');
const channelHelp = require('./lib/channelHelp');

let controller = Botkit.slackbot({
  debug: process.env.SLACK_API_DEBUG || false
});

let bot = controller.spawn({
  token: process.env.SLACK_API_TOKEN
}).startRTM();

controller.on('team_join', (bot, message) => {
  bot.reply(message, require('./mesages/help'));
});

controller.hears(['help'], 'direct_message', (bot, message) => {
  bot.reply(message, require('./messages/help'));
});

controller.on('user_channel_join', channelHelp);
controller.hears(['help'], 'direct_mention,mention', channelHelp);
