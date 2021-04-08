const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Walaska Çekiliş Menüsü`, client.user.avatarURL())
.setColor('#ff7b00')
.setDescription(` Walaska botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
        .addField('**__Çekliş Başlat__**','`w?çekiliş-başlat #kanal süre kazanan_sayısı Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız',false )
        .addField('**__Çekiliş Yenile__**','`w?çekiliş-yenile mesaj_id` \n Belirtilen İd deki Çekilişi Yeniler',true)
        .addField('**__Çekiliş Liste__**','`w?çekiliş-liste` \nSunucudaki Aktif Çekilişleri Listeler',true)
        .addField('**__Çekiliş Bitir__**', '`w?çekiliş-bitir mesaj_id` \nBelirtilen İd deki Çekilişi Sonlandırır.',false)
        .addField('**__Bilgilendirme__**', '`w?davet` | Botu Sununuya Davet Edersiniz \n`w?botbilgi` | Botun İslatistiklerini Görürsünüz',true)
  .setImage(`https://i.hizliresim.com/bjoggY.png`)
.setThumbnail("https://i.hizliresim.com/JRvjpr.png")
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["giveaway"], 
    permLevel: 0
  };
  exports.help = {
    name: 'çekiliş'
  }; 
  