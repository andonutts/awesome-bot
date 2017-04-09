const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

var magic8Response = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];

let responseObject = {
  "ayy": "Ayy, lmao!",
  "wat": "Say what?",
  "lol": "roflmaotntpmp"
};

client.login(config.token);

client.on("ready", () => {
  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
});

client.on("message", (message) => {
  // Exit if any bot
  if (message.author.bot) return;

  // Message reply array
  if(responseObject[message.content]) {
    message.channel.sendMessage(responseObject[message.content]);
  }

  // Begin prefix-activated replies
  if (!message.content.startsWith(config.prefix)) return;

  if (message.content.startsWith(config.prefix + "magic8ball")) {
    message.channel.sendMessage(magic8Response[getRandomInt(0,19)]);
  } else
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

function getRandomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}