const Discord = require('discord.js')
exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    const ChannelEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('You Need to Join a Voice Channel Before using this command.')
    if (!channel) return message.channel.send(ChannelEmbed);
    const Roleembed = new Discord.MessageEmbed()
    .setColor('#ff0862')
    .setDescription('You need a Role called **DJ** to use This command')
    if (!message.member.roles.cache.some(role => role.name ===(client.config.DJrole)))
    return message.channel.send(Roleembed);
    let queue = message.client.queue.get(message.guild.id)
    const qe = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`There is Nothing playing Now to resume. **use ${client.config.Prefix}play <song name or link From Youtube>**`)
    if(!queue) return message.channel.send(qe)
    if(queue.playing !== false)
    queue.connection.dispatcher.resume()
    message.channel.send('resumed the music')
    return
    
}