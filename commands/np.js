const Discord = require('discord.js')
exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    const Embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription('You Need to Join a Voice Channel Before using this command.')
    if (!channel) return message.channel.send(Embed);
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed:{
            description: `Is There anything playing now:man_facepalming:. **use ${client.config.Prefix}play <song name or link From Youtube>**`,
            color: 'RANDOM'
        }
    })
    message.channel.send({
        embed:{
            title: 'Currently Playing',
            description: queue.songs[0].title + ', Requested By: ' + '<@' + queue.songs[0].requester + '>',
            color: 'RANDOM',
            thumbnail: queue.songs[0].thumbnail
        }
    })
}