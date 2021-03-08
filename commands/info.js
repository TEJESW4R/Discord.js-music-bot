const Discord = require('discord.js');
exports.run = async(client, message) => {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    const Embed = new Discord.MessageEmbed()
    .setTitle('Bot info')
    .setColor('RANDOM')
    .setDescription('Github: [click here](http://example.com)')
    .addFields(
		{ name: 'Uptime', value: uptime },
		{ name: 'Bot Libray', value: 'Discord.js' },
	)
    message.channel.send(Embed)
    }
   