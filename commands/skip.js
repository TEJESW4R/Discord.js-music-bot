const Discord = require('discord.js')
exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    const ChannelEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('You Need to Join a Voice Channel Before using this command.')
    if (!channel) return message.channel.send(ChannelEmbed);
    let queue = message.client.queue.get(message.guild.id)
    const qe = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`There is Nothing playing Now to Skip. **use ${client.config.Prefix}play <song name or link From Youtube>**`)
    if(!queue){ return message.channel.send(qe)
    }
    if(queue.songs.length !== 0) {
        message.channel.send('skipped the song')
        queue.connection.dispatcher.end('skipped the song')
    }
}