const { MessageEmbed } = require('discord.js');

const HELP = require('./commonConstraints');

module.exports = function Help(action) {
    if(action.content == HELP){
        const msgEmbed = new MessageEmbed()
            .setTitle('List of commands')
            .setColor(0xff0000)
            .setDescription(
                `
                _hello - Welcome new user on  the channel
                _help - Show list of commands on channel
                `
            )
        action.channel.send(msgEmbed);
    }
};