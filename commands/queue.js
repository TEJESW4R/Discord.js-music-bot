const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
    const channel = message.member.voice.channel;
    let ChannelEmbed = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription('You Need to Join a Voice Channel Before using this command.')
    if (!channel) return message.channel.send(ChannelEmbed);
    const queue = message.client.queue.get(message.guild.id)
    let status;
    if(!queue) status = 'There is nothing in queue!'
    else status = queue.songs.map(x => '• ' + x.title + ' -Requested by ' + `<@${x.requester.id}>`).join('\n')
    if(!queue) np = status
    else np = queue.songs[0].title
    if(queue) thumbnail = queue.songs[0].thumbnail
    else thumbnail = message.guild.iconURL()
    let embed = new MessageEmbed()
    .setTitle('Queue')
    .setThumbnail(thumbnail)
    .setColor('RANDOM')
    .addField('Now Playing', np, true)
    .setDescription(status)
    message.channel.send(embed)
}