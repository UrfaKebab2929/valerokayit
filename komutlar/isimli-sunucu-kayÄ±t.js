const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
    const ayarlar = require('../ayarlar.json')
    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Sunucu Kayıt Sistemi`, message.author.avatarURL())
    .setDescription(`:white_small_square: - \`${prefix}erkek-role [@roletiket]\` - \`${prefix}erkek-role-kapat\` 
Sunucuda kayıt edebilmeniz için erkek rolü belirlemelisiniz.

    :white_small_square: - \`${prefix}kadın-role [@roletiket]\` -  \`${prefix}kadın-role-kapat\` 
    Sunucuda kayıt edebilmeniz için kadın rolü belirlemelisiniz.

    :white_small_square: - \`${prefix}yetkili-role [@roletiket]\` -  \`${prefix}yetkili-role-kapat\` 
Kullanıcıları kayıt edebilecek bir yetkili rolü belirtmelisiniz.

:white_small_square: - \`${prefix}kayıtsız-role [@roletiket]\` -  \`${prefix}kayıtsız-role-kapat\` 
Sunucuya katılınca verilecek kayıtsız rolünü ayarlamanız gerekmektedir.

:white_small_square: - \`${prefix}kayıt-log [#kanaletiket]\` -  \`${prefix}kayıt-log-kapat\` 
Kayıt edilen kullanıcıları log kanalına yansıtacak bir kanal seçersiniz.

:white_small_square: - \`${prefix}isimler [@kullanıcı]\`
Kullanıcı eskiden kayıt yaptırdıysa bu komutla eski isimlerine bakabilirsiniz [Güvenlik Amaçlı].

:white_small_square: - \`${prefix}admin-istatistik [@kullanıcı]\`
Bu komutla yetkililerin kaç erkek, kaç kadın kullanıcı kaydettiğini görürsünüz.


\`\`\`Sıfırlama Komutları\`\`\`
:white_small_square: - \`${prefix}kayıt-kapat\` 
Bu komutla tüm sistemler kapanır.

\`\`\`Nasıl Kullanılır?\`\`\`
**Erkek komut Kullanımı: \`${prefix}erkek, ${prefix}e\`** 
**Kadın komut Kullanımı: \`${prefix}kadın, ${prefix}k\`**

:white_small_square: - **Örnek Erkek komut kullanım:** \`${prefix}erkek @etiket İsim Yaş\`
:white_small_square: - **Örnek Kadın komut kullanım:** \`${prefix}kadın @etiket İsim Yaş\`
  
`)
.setFooter(`${message.author.tag} Tarafından istendi! - Gnarge 2020`,  message.author.avatarURL())
.setThumbnail(message.author.avatarURL())
.setColor('#8800ff')
    .setImage("https://media.discordapp.net/attachments/779531107078373436/804291717976686642/unknown.png")
    .setTimestamp()
    return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,  
  aliases: [],
  permLevel: 0
};
//EMİRHAN SARAÇ

exports.help = {
  name: 'kayıt-sistemi',
  description: 'Tek komut da isimli (Erkek - Kadın) kayıt sistem',
  usage: 'isimli-kayıt-sistemi',
  type:'Yapılandırma'
};
