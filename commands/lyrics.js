const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");

exports.run = async(client, message, args) => {
    const queue = message.client.queue.get(message.guild.id);
    let qe = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`There is Nothing playing Now. **use ${client.config.Prefix}play <song name or link From Youtube>**`)
    if (!queue) return message.channel.send(qe)

    let lyrics = null;

    try {
      lyrics = await lyricsFinder(queue.songs[0].title, "");
      if (!lyrics) lyrics = `No lyrics found for ${queue.songs[0].title}`;
    } catch (error) {
      lyrics = `No lyrics found for ${queue.songs[0].title}`;
    }

    let lyricsembed = new MessageEmbed()
      .setTitle(`Lyrics For ${queue.songs[0].title}`)
      .setDescription(lyrics)
      .setColor("RANDOM")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsembed)
}
