module.exports = (client) => {
    console.log('BOT is Online')
    client.user.setStatus("dnd");
    client.user.setActivity(`${client.config.Prefix}help`, { type: "PLAYING"})
}