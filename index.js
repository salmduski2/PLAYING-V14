const { Client, GatewayIntentBits, ActivityType } = require("discord.js")
const client = new Client({ intents: GatewayIntentBits.Guilds, })

client.on("ready", async () => {
  client.user.setPresence({ status: "dnd"}) // Type Status dnd , idle , online
  client.user.setActivity({ name: `By SmSm`, type: ActivityType.Playing }) // Type Activity Playing , Watching , Streaming 
  console.log(client.user.tag)
})



client.on("ready", async () => {
 try{
const { joinVoiceChannel } = require('@discordjs/voice'); 

client.channels.fetch("IDVOICE").then((channel) => { 
 console.log(`${client.user.tag} Connected To Voice`) 
const VoiceConnection = joinVoiceChannel({ channelId: channel.id, 
guildId: channel.guild.id, 
adapterCreator: channel.guild.voiceAdapterCreator,
selfDeaf: true,
selfMute: true
  }); 
     });
  } catch (err) {
console.log(err)
}
});


client.login("MTA2NzU3Mjg1ODI5NDg5ODY5OQ.G32mBP.y1l6O2ahlDzHvarqBAs3cjzobv4WI9nDXj4RZc")
// All Copyright By SmSm
