const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message) => {
 let HelpEmbed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setTitle(`${bot.user.username}'s Help Menu`)
     .setDescription(``)
     .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
     .setTimestamp();
 return message.channel.send(HelpEmbed);
}
module.exports.help = {
    name: "help"
}