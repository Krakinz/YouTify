const { YouTify_Singer } = require("../../YouTifyPlayer/YouTify_Singer.js");
const { MessageEmbed } = require("../../YouTifyPlayer/YouTified.djs");
// ===========================================================================================================================
// ๐ง๐๐จ๐ฎ๐๐ข๐๐ฒโข is Discord ๐๐๐๐๐๐๐ Music Bot built with Discord.js and has ๐๐+ ๐๐ฎ๐๐ข๐จ ๐๐ข๐ฅ๐ญ๐๐ซ๐ฌ. โ๐๐ฑ๐ฐ๐ต๐ช๐ง๐บ ๐ข๐ฏ๐ฅ ๐๐ฐ๐ถ๐ฏ๐ฅ๐ค๐ญ๐ฐ๐ถ๐ฅ ๐ข๐ณ๐ฆ ๐ช๐ฏ ๐ฃ๐ฆ๐ต๐ขโ
// ===========================================================================================================================
module.exports.run = async (client, message, args, Discord) => {
  const Channel = message.member.voice.channel;
  if (!Channel) {
    message.react("๐ก");
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`๐ฌMono\``)
          .setAuthor(
            `๐งYouTifyโข`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setURL("https://github.com/Krakinz")
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setFooter(
            `๐๐ฝโReqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(
            `\`โฃ๏ธError\``,
            `Not connected to any VoiceChannel!`,
            true
          )
      )
      .catch(console.error);
    return;
  }
  // ===========================================================================================================================
  // ๐ง๐๐จ๐ฎ๐๐ข๐๐ฒโข is Discord ๐๐๐๐๐๐๐ Music Bot built with Discord.js and has ๐๐+ ๐๐ฎ๐๐ข๐จ ๐๐ข๐ฅ๐ญ๐๐ซ๐ฌ. โ๐๐ฑ๐ฐ๐ต๐ช๐ง๐บ ๐ข๐ฏ๐ฅ ๐๐ฐ๐ถ๐ฏ๐ฅ๐ค๐ญ๐ฐ๐ถ๐ฅ ๐ข๐ณ๐ฆ ๐ช๐ฏ ๐ฃ๐ฆ๐ต๐ขโ
  // ===========================================================================================================================
  const Queue = client.queue.get(message.guild.id);
  if (!Queue) {
    message.react("๐ก");
    message.channel
      .send(
        new MessageEmbed()
          .setTimestamp()
          .setColor("#c4b932")
          .setTitle(`\`๐ฌMono\``)
          .setAuthor(
            `๐งYouTifyโข`,
            `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
          )
          .setURL("https://github.com/Krakinz")
          .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
          .setFooter(
            `๐๐ฝโReqstd by ${message.author.username}`,
            message.author.avatarURL({ dynamic: true })
          )
          .addField(
            `\`โฃ๏ธError\``,
            `No song in Queue, Please Add Some Songs By Using  ${client.YouTix}play or  ${client.YouTix}search Command!`,
            true
          )
      )
      .catch(console.error);
    return;
  }
  // ===========================================================================================================================
  // ๐ง๐๐จ๐ฎ๐๐ข๐๐ฒโข is Discord ๐๐๐๐๐๐๐ Music Bot built with Discord.js and has ๐๐+ ๐๐ฎ๐๐ข๐จ ๐๐ข๐ฅ๐ญ๐๐ซ๐ฌ. โ๐๐ฑ๐ฐ๐ต๐ช๐ง๐บ ๐ข๐ฏ๐ฅ ๐๐ฐ๐ถ๐ฏ๐ฅ๐ค๐ญ๐ฐ๐ถ๐ฅ ๐ข๐ณ๐ฆ ๐ช๐ฏ ๐ฃ๐ฆ๐ต๐ขโ
  // ===========================================================================================================================
  Queue.Filters["mono"] = !Queue.Filters["mono"];
  await YouTify_Singer(client, message, {
    Filter: true,
    Song: Queue.Songs[0],
  });
  message.channel
    .send(
      new MessageEmbed()
        .setTimestamp()
        .setColor("#43745a")
        .setTitle(`\`๐ฌMono\``)
        .setAuthor(
          `๐งYouTifyโข`,
          `https://i.postimg.cc/gcX8075z/guitar-sing.gif`
        )
        .setURL("https://github.com/Krakinz")
        .setThumbnail(`https://i.postimg.cc/QttWpFss/You-Tify-1.png`)
        .setFooter(`๐๐ฝโReqstd by`, message.author.avatarURL({ dynamic: true }))
        .addField(
          `\`๐Filter Applied\``,
          `Mono Filter Has Been ${Queue.Filters["mono"]
            ? "โEnabled (Song Maybe Ahead)"
            : "โDisabled (Song Maybe Backward)"
          }!`,
          true
        )
        .addField(
          `\`โกFilter Warning!\``,
          `Note That Filter takes time to be applied to the current music as it depends on the size and lenth of audio!`,
          true
        )
    )
    .catch(console.error);
  return;
};
// ===========================================================================================================================
// ๐ง๐๐จ๐ฎ๐๐ข๐๐ฒโข is Discord ๐๐๐๐๐๐๐ Music Bot built with Discord.js and has ๐๐+ ๐๐ฎ๐๐ข๐จ ๐๐ข๐ฅ๐ญ๐๐ซ๐ฌ. โ๐๐ฑ๐ฐ๐ต๐ช๐ง๐บ ๐ข๐ฏ๐ฅ ๐๐ฐ๐ถ๐ฏ๐ฅ๐ค๐ญ๐ฐ๐ถ๐ฅ ๐ข๐ณ๐ฆ ๐ช๐ฏ ๐ฃ๐ฆ๐ต๐ขโ
// ===========================================================================================================================
module.exports.help = {
  name: "mono",
  aliases: ["mn"],
  cooldown: 10000,
  category: "Filters",
  description: "Add/Remove mono Filter To/From Currently Playing Song!",
  usage: "mono",
  examples: ["mono"],
};
