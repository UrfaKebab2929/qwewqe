const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Walaska Abone Menüsü`, client.user.avatarURL())
.setColor('#ff7b00')
.setDescription(` Walaska botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
        .addField('**__Abone__**','`w?abonever @üye` \nAbone Rolünü Birine Verirsiniz',false)
        .addField('**__Abone Rol__**','`w?abone-rol @rol` \nAbone Rolünü Ayarlarsın',false)
        .addField('**__Abone Yetkili Rol__**','`w?abone-yetkili-rol @rol` \nAbone Yetkili Rolünü Ayarlarsınız',false)
        .addField('**__Abone Log__**','`w?abone-log #kanal` \nAbone Log Kanalını Ayarlarsın',false)
        .addField('**__Bilgilendirme__**', '`w?davet` | Botu Sununuya Davet Edersiniz \n`w?botbilgi` | Botun İslatistiklerini Görürsünüz',true)
  .setImage(`https://i.hizliresim.com/bjoggY.png`)
.setThumbnail("https://i.hizliresim.com/JRvjpr.png")
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["abone"], 
    permLevel: 0
  };
  exports.help = {
    name: 'abone'
  }; 
  