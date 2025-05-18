const { Client, Events, GatewayIntentBits,message   } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.login(TOKENHERE);

client.on("messageCreate",(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith('create')) {
        const url= message.content.split('create')[1];
        return message.reply({
            content:"Generating short url for link" + url,
        })
    }       
        message.reply({
            content:"Hii " + (message.author.globalName || message.author.username)
        })
})


client.on("interactionCreate",(interaction)=>{
 interaction.reply("Pong");
})