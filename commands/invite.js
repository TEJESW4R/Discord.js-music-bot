const Discord = require('discord.js');
exports.run = async(client, message) => {
    const Embed = new Discord.MessageEmbed()
    .setTitle('Click here')
    .setColor('RANDOM')
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146959225`)
    message.channel.send(Embed)
    .then(message => message.channel.send(`Direct Link: https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146959225`)
    )
}