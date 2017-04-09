const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

client.login("config.token");

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.sendMessage("pong!");
  } else
  if (message.content.startsWith(config.prefix + "pong")) {
    message.channel.sendMessage("ping!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.sendMessage("bar!");
  }
});