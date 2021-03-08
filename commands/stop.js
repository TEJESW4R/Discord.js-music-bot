const Discord = require('discord.js');
exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    const ChannelEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('You Need to Join a Voice Channel Before using this command.')
    if (!channel) return message.channel.send(ChannelEmbed);
    const Roleembed = new Discord.MessageEmbed()
    .setColor('#ff0862')
    .setDescription('You need a Role called **DJ** to use This command')
    if (!message.member.roles.cache.some(role => role.name === (client.config.DJrole)))
    return message.channel.send(Roleembed);
    const queueembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`There is Nothing playing Now to stop. **use ${client.config.Prefix}play <song name or link From Youtube>**`)
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send(queueembed)
    message.channel.send('Stopped the music')
    queue.songs = []
    queue.connection.dispatcher.end('Stopped the music')
    return
}