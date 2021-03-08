const Discord = require('discord.js')
exports.run = async(client, message) => {
    message.channel.send("<@" + message.author.id + ">")
                .then(msg => {
                    setTimeout(function() {
						const ping = msg.createdTimestamp - message.createdTimestamp;
                        const pingembed = new Discord.MessageEmbed()
                        .setColor(`RANDOM`)
                        .setTitle('Ping')
                        .setDescription(`Bot ping: **${ping}**, Api ping: **${client.ws.ping}**`)
                        msg.edit(pingembed)
                    }, 1000)
                })
            }