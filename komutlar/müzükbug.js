const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const DarkCode = new Discord.RichEmbed()

             .setColor('')
              .setTitle(`Yardım-Menusu`)
             .setAuthor(`Dost•Bot`, client.user.avatarURL) 
             .setThumbnail(client.user.avatarURL)
             .addField(`:ne: **${prefix}yardım-moderasyon**`,`Moderasyon Komutlarını Listeler`)
             .addField(`:ne: **${prefix}yardım-moderasyon2**`,`2. Moderasyon Komutlarını Listeler`)
             .addField(`:discord: **${prefix}yardım-kullanıcı**`, `Sunucu Ve Kullanıcı Komutlarını Listeler`)
             .addField(`:s_: **${prefix}yardım-eğlence**`, `Eğlence Komutlarını Listeler`)
             .addField(`:d_: **${prefix}yardım-kayıt**` , `Kayıt Komutlarını Listeler`)
             .addField(`:ate: **${prefix}yardım-ekonomi**`, `Ekonomi Komutlarını Listeler`)
             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL)
            
        return message.channel.sendFileFilesCodeEmbedMessage(DarkCode);
}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ["clip","clips","müzik","loop","lyrics","move","np","pause","play","p","playlist","pruning","queue","remove","resume","search","shuffle","skip","skipto","stop","volume","v","s","st","r","rm","q","pl","mv","l","ly","m",],
    permLevel : 0
}

exports.help = {
    name : 'müzik',
    description : 'Komut Gösterir atar',
    usage : 'yardım'
}