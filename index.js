const Discord = require('discord.js');
require('dotenv').config();

const bot = new Discord.Client();


const Help = require('./Help');
const Greetings = require('./Greetings');

bot.on('message', message => {
    if(message.content == '_hello') {
        message.reply('Welcome on Trk server');
    }
});

bot.on('message', Help);
bot.on('guildMemberAdd', Greetings);

bot.login(process.env.SERVER_TOKEN);

