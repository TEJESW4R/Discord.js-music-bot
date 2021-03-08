exports.run = async(client, message) => 
    message.channel.send({embed: {
        color: "RANDOM",
        title: "Commands",
        url: "http://google.com",
        fields: [{
            name: `${client.config.Prefix}play`,
            value: "Play some songs From YouTube"
          },
          {
            name: `${client.config.Prefix}lyrics`,
            value: "Get Lyrics From Currently Playing song"
          },
          {
            name: `${client.config.Prefix}np`,
            value: "Show's Currently playing song and Length"
          },
          {
            name: `${client.config.Prefix}pause`,
            value: "pause the song"
          },
          {
            name: `${client.config.Prefix}queue`,
            value: "Show songs in queue"
          },
          {
            name: `${client.config.Prefix}resume`,
            value: "resume song"
          },
          {
            name: `${client.config.Prefix}skip`,
            value: "Skip current playing song"
          },
          {
            name: `${client.config.Prefix}dc`,
            value: "Disconnent From voice channel"
          }
        ]
    }
    })