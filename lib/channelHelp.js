module.exports = function channelHelp(bot, message) {
  bot.api.channels.info({channel: message.channel}, function(err, result) {
    if (err) {
      throw err
    }

    let payload = require(`../messages/${result.channel.name}`);
    payload.attachments[0].fallback = `Welcome to the ${result.channel.name} channel.`
    if (message.subtype === 'channel_join') {
      return bot.startPrivateConversation(message, function(err, dm) {
        dm.say(payload);
      });
    }
    bot.reply(message, payload);
  });  
}
