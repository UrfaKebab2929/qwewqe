const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Walaska Yardım Menüsü`, client.user.avatarURL())
.setColor('#ff7b00')
.setDescription(` Walaska botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
        .addField('**__Müzik__**','`w?müzik` \nMüzik Komutlarını Gösterir',true)
        .addField('**__Çekiliş__**','`w?çekiliş` \nÇekiliş Komutlarını Gösterir',true)
        .addField('**__Abone__**','`w?abone` \nÇekiliş Komutlarını Gösterir',true)
        .addField('**__Bilgilendirme__**', '`w?davet` | Botu Sununuya Davet Edersiniz \n`w?botbilgi` | Botun İslatistiklerini Görürsünüz',true)
  .setImage(`https://i.hizliresim.com/bjoggY.png`)
.setThumbnail("https://i.hizliresim.com/JRvjpr.png")
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  