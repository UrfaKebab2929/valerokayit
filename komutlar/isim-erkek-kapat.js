const Discord = require('discord.js');
const db = require('quick.db');
//EMİRHAN SARAÇ


exports.run = async (client, message, params, args) => {
   	          const ayarlar = require('../ayarlar.json')
				    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

                    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için "Sunucuyu Yönet" Yetkisine Sahip Olmalısın!')  
                    let özellik = await db.fetch(`isimerkekRol.${message.guild.id}`);
                    if(!özellik) {
                       const hata = new Discord.MessageEmbed()
                       .setAuthor('HATA', message.author.avatarURL())
                       .setDescription(`Erkek rolü zaten ayarlanmamış bu yüzden kapatamazsın!`) 
                       .setColor('RED')
                       .setTimestamp()
                       return message.channel.send(hata)
                         }
    db.delete(`isimerkekRol.${message.guild.id}`)

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Başarılı!`, message.author.avatarURL())
    .setDescription(`Erkek rolü başarıyla verilerden silindi!`)
    .setTimestamp()
    .setColor("GREEN")
    //EMİRHAN SARAÇ

     return message.channel.send(embed)
    //EMİRHAN SARAÇ

};
//EMİRHAN SARAÇ

exports.conf = {
  kategori: 'ayarlar',
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'erkek-role-kapat',
 description: 'Sayaçı kapatırsınız.',
 usage: 'sayaç'
};//EMİRHAN SARAÇ
