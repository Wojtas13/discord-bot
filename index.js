const Discord = require('discord.js');
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

bot.on('message', newUser => {
    if(newUser.content === '_add'){
        const user = newUser.guild.addMember(Discord.GuildMember(), nick('Stachu'));
        newUser.channel.send('user added');
    }
})

bot.login('Njk0MTc1NzgwNjc0MjA3NzQ0.XoHzxQ.Jwwk3qk4M_eumfZqvkDGMj7dzPc');

