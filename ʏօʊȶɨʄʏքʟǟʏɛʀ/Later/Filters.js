// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
async function Filters() {
  return {
    bassboost: "bass=g=10,dynaudnorm=f=150",
    vaporwave: "aresample=48000,asetrate=48000*0.8",
    nightcore: "aresample=48000,asetrate=48000*1.25",
    aphaser: "aphaser",
    apulsator: "apulsator",
    asetrate: "asetrate",
    speed: "atempo=2",
    superspeed: "atempo=3",
    slow: "atempo=0.8",
    superslow: "atempo=0.5",
    deesser: "deesser=i=1",
    phaser: "aphaser=in_gain=0.4",
    subboost: "asubboost",
    treble: "treble=g=5",
    tremolo: "tremolo",
    normalizer: "dynaudnorm=f=200",
    pulsator: "apulsator=hz=1",
    flanger: "flanger",
    vibrato: "vibrato=f=6.5",
    karaoke: "stereotools=mlev=0.1",
    reverse: "areverse",
    gate: "agate",
    mcompand: "mcompand",
    echo: "aecho=0.8:0.9:1000:0.3",
    earwax: "earwax",
    surround: "surround",
    haas: "haas",
    mono: "pan=mono|c0=.5*c0+.5*c1",
    sofalizer: "sofalizer",
    "8D": "apulsator=hz=0.08",
    "3D": "apulsator=hz=0.125",
  };
}
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
async function AllFilters(Queue) {
  let EncodeFilters = [],
    Encoder = [];

  for (let Filter of Object.keys(Queue.Filters)) {
    if (Queue.Filters[Filter]) {
      EncodeFilters.push((await Filters())[Filter]);
    }
  }

  if (EncodeFilters.length < 1) {
    Ecoder = [];
  } else {
    Encoder = ["-af", EncodeFilters.join(",")];
  }

  return Encoder;
}
// ===========================================================================================================================
// 🍏𝐘𝐨𝐮𝐓𝐢𝐟𝐲™ is Discord 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 Music Bot built with Discord.js and has 𝟐𝟎+ 𝐀𝐮𝐝𝐢𝐨 𝐅𝐢𝐥𝐭𝐞𝐫𝐬. ❓𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘢𝘯𝘥 𝘚𝘰𝘶𝘯𝘥𝘤𝘭𝘰𝘶𝘥 𝘢𝘳𝘦 𝘪𝘯 𝘣𝘦𝘵𝘢❓
// ===========================================================================================================================
module.exports = {
  Filters,
  AllFilters,
};
