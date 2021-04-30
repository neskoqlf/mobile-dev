#const Discord = require('discord.js')
const client = new Discord.Client();

var token = ""//VOTRE TOKEN
var prefix = ""//VOTRE PREFIX

client.login(token);

client.on('ready', function(){
    console.log(`${client.user.username} est co`)
    
    client.user.setPresence({
       status: "online",
       activity: {
           name: "Nesko te bz",
           type: "STREAMING"
       }
    })
});

client.on("message", message => {
    if(message.content === prefix + "ping") {
       message.channel.send("pong")
}
})

client.on("message", message => {
    if(message.content === prefix + "speed") {
        message.channel.send(`Latence du bot: ${client.ws.ping} ms`)
}
})

client.on("message", message => {
    if(message.content.startsWith(prefix + "say")){
let args = message.content.split(" ").slice(1);
let botmessage = args.join(" ");
message.channel.send(botmessage);
message.delete()
}
})

client.on("message", message => {
    if(message.content.startsWith(prefix + "vc")){
        if(!message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.send(`Membre en vocal: **${message.guild.members.cache.filter(m => m.voice.channel).size}** (**${message.guild.memberCount} membres**)`)
}
})

client.on("message", message => {
    if(message.content.startsWith(prefix + "voicemove")){
        if(!message.member.hasPermission("ADMINISTRATOR")) return;
 message.member.voice.channel.join().then(m => { 
message.channel.send(`${message.author}, dÃ©place moi dans le salon ou tu souhaite que je dÃ©place toutes les personnes du salon!`)
   message.member.voice.channel.leave()
    }, 120000);
}
});

client.on("message", message => {
    if(message.content.startsWith(prefix + "help")){
        
        const embedhelp = new Discord.MessageEmbed()
        
        
.addField("`bot`", `[Alias:](http://Nesko.bot) \`botinfo\`,\`abonnement\` \n - Affiche les informations de votre abonnement.`)
.addField("`setavatar`", `[Alias:](http://Nesko.bot) \`botavatar\`\n - Permet de changer la photo de profil du bot`)
.addField("`setname`", `[Alias:](http://Nesko.bot) \`botname\`\n - Permet de changer le pseudonyme du Bot`)
.addField("`prefix`", `[Alias:](http://Nesko.bot) \`setprefix\`\n - Permet de changer le prefixe du bot`)
.addField("`stream`", `[Alias:](http://Tonton.bot) \`play\`,\`watch\`,\`listen\`,\`setstream\`,\`activity\`\n - Permet de changer l'activitÃ© du Bot`)
.addField("`color`", `[Alias:](http://Tonton.bot) \`colorembed\`,\`theme\`\n - Permet de dÃ©finir une couleur au embed du Bot.`)
.addField("`giveaway`", `[Alias:](http://Mowraa.bot) \`gstart\`,\`giveawaystart\` \n - Permet d'afficher le panel de configuration des giveaways.`)
.addField("`reroll`", `[Alias:](http://Nayzord.bot) \`greroll\`,\`giveawayreroll\`\n - Re-sÃ©lectionne un gagnant du dernier giveaway.`)
.addField("`statut`", `[Alias:](http://Nayzord.bot) \`spanel\`,\`statutpanel\`\n - Permet d'afficher le panel de configuration des Custom Status.`)
.addField("`tempchannel`", `[Alias:](http://zpk.bot) \`tpanel\`,\`configtempo\`,\`tempo\`\n - Permet d'afficher le panel de configuration des salon temporaires.`)
.addField("`membercount`", `[Alias:](http://zpk.bot) \`cpanel\`,\`mbpanel\`,\`membercounterpanel\`\n - Permet d'afficher le panel de configuration des salons temporaires.`)
.addField("`logs`", `[Alias:](http://ryn.bot) \`lpanel\`,\`logspanel\`\n - Permet d'afficher le panel de configuration des logs. (Non terminÃ©e)`)
.addField("`autorole`", `[Alias:](http://ryn.bot) \`apanel\`,\`autorolepanel\`\n - Permet d'afficher le panel de configuration de l'autorole.`)
.addField("`mpanel`", `[Alias:](http://Nesko.bot) \`mods\`,\`modspanel\` \n - Permet d'afficher le panel de configuration des modÃ©rateurs.`)
.addField("`mute`", `[Alias:](http://Nesko.bot) \`m\`,\n - Retirer la permissions de parler dans tout les salons textuels.`)
.addField("`unmute`", `[Alias:](http://Nesko.bot) \`um\`\n - Redonne la permissions de parler dans tout les salons textuels.`)
.addField("`ban`", `[Alias:](http://Nesko.bot) \`b\` \n - Bannis la personne.`)
.addField("`unban`", `[Alias:](http://Nesko.bot) \`ub\`\n - DÃ©bannir une personne`)
.addField("`nuke`", `[Alias:](http://Nesko.bot) \`purge\`,\`boom\`\n - Permet de supprimer et recrÃ©e le salon ou est Ã©cris la commande`)
.addField("`voicemove`", `[Alias:](http://Nesko.bot) \`vm\`,\`voicem\`\n - DÃ©place toutes les personnes du salon vers un autre salon`)

message.channel.send(embedhelp)
}
})

client.on("message", message => {
    if(message.content.startsWith(prefix + "authorinfo")){
        
        const embedinfo = new Discord.MessageEmbed()
        
        .setTimestamp()
         .setColor(`BLUE`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/834799550224138242/837672398736195654/b86e040eded364b9f19084ddad635861.png`)
            .setFooter("Owner", message.author.displayAvatarURL({ dynamic: true }))
         .setDescription(`__**Mobile Protect**__\n\n*Mobile Protect est un bot appartenant Ã * \`Nesko#6666\`\n\n**DÃ©veloppeurs :**\n[Nesko#6666](https://discord.gg/palawan) -> Bot & Host\n[zpk#6258](https://discord.gg/palawan) -> Dev Site\n[JL Nayzord#2127](https://discord.gg/palawan) -> Service Marketing`)
         
message.channel.send(embedinfo)
}
})

client.on("message", message => {
if(message.content.startsWith("<@ID DU BOT>")){
message.channel.send("> Mon prefix est : `VOTRE PREFIX`")
}
})
