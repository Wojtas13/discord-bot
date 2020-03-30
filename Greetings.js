module.exports = function Greetings(action) {
    const channel = action.guild.channels.cache.find(ch => ch.name === 'member-log');

    if(!channel) console.log('nie dziala');

    channel.send(`Welcome to the Trk server, ${action}`);
};