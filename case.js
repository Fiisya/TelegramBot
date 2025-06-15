/*
     Recode By Alfi
     Powered By Rafael
     Base by Zeeone
     thanks to wannoffc
*/
require("./settings")
const {
    Telegraf,
    Context,
    Markup
} = require('telegraf')
const {
    message,
    editedMessage,
    channelPost,
    editedChannelPost,
    callbackQuery
} = require("telegraf/filters");
const {toFirstCase,
        isNumber,
        formatp,
        parseMention, 
        resize, 
        getRandom,
        generateProfilePicture, 
        getCase, 
        runtime, 
        FileSize, 
        h2k, 
        makeid, 
        kyun, 
        randomNomor, 
        jsonformat, 
        isUrl,
        fetchJson, 
        sleep,
        getBuffer
        } = require("./lib/myfunc2");
        const { formatSize } = require("./lib/myfunc3");
const chalk = require('chalk')
const fs = require('fs')
const fetch = require('node-fetch')
const FileType = require('file-type')
const os = require('os')
const speed = require('performance-now')
const util = require('util')
const yts = require('yt-search')
const axios = require('axios')
const cheerio = require('cheerio')
const FormData = require('form-data')
const crypto = require('crypto')
const sessions = new Map();
const {
    simple
} = require('./lib/myfunc')
const { pinterest } = require("./lib/pinterest")

const hxz = require ("hxz-api")

module.exports = alfixd = async (alfixd, bot) => {
    //console.log(alfixd)
    try {
        const body = alfixd.message.text || alfixd.message.caption || ''
        const budy = (typeof alfixd.message.text == 'string' ? alfixd.message.text : '')
        const {
            isUrl
        } = simple
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)        
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const user = simple.getUserName(alfixd.message.from)
        const pushname = user.full_name;
        const user_id = alfixd.message.from.id + " "
        const username = alfixd.message.from.username ? alfixd.message.from.username : "alfisyahrial";
        const isCreator = OWNER[0].replace("https://t.me/", '') == alfixd.update.message.from.username
        const from = alfixd.message.chat.id
const prefix = isCmd ? body[0] : ''
        const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
        const isGroup = alfixd.chat.type.includes('group')
        const groupName = isGroup ? alfixd.chat.title : ''

        const isImage = alfixd.message.hasOwnProperty('photo')
        const isVideo = alfixd.message.hasOwnProperty('video')
        const isAudio = alfixd.message.hasOwnProperty('audio')
        const isSticker = alfixd.message.hasOwnProperty('sticker')
        const isContact = alfixd.message.hasOwnProperty('contact')
        const isLocation = alfixd.message.hasOwnProperty('location')
        const isDocument = alfixd.message.hasOwnProperty('document')
        const isAnimation = alfixd.message.hasOwnProperty('animation')
        const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
        const quotedMessage = alfixd.message.reply_to_message || {}
        const isQuotedImage = quotedMessage.hasOwnProperty('photo')
        const isQuotedVideo = quotedMessage.hasOwnProperty('video')
        const isQuotedAudio = quotedMessage.hasOwnProperty('audio')
        const isQuotedSticker = quotedMessage.hasOwnProperty('sticker')
        const isQuotedContact = quotedMessage.hasOwnProperty('contact')
        const isQuotedLocation = quotedMessage.hasOwnProperty('location')
        const isQuotedDocument = quotedMessage.hasOwnProperty('document')
        const isQuotedAnimation = quotedMessage.hasOwnProperty('animation')
        const isQuoted = alfixd.message.hasOwnProperty('reply_to_message')
        const timestampi = speed();
        const latensii = speed() - timestampi

        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
                return await alfixd.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        const getStyle = (style_, style, style2) => {
            listt = `${lang.getStyle(style, style2)}`
            for (var i = 0; i < 300; i++) {
                listt += '» `' + style_[i] + '`\n'
            }
            reply(listt)
        }

        //get type message 
        var typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = 'Image'
        else if (isVideo) typeMessage = 'Video'
        else if (isAudio) typeMessage = 'Audio'
        else if (isSticker) typeMessage = 'Sticker'
        else if (isContact) typeMessage = 'Contact'
        else if (isLocation) typeMessage = 'Location'
        else if (isDocument) typeMessage = 'Document'
        else if (isAnimation) typeMessage = 'Animation'

        //push message to console
        if (alfixd.message) {
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || typeMessage)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname) + '\n' + chalk.blueBright('=> In'), chalk.green(isGroup ? groupName : 'Private Chat', alfixd.message.chat.id))
        }
        
        
        
        
 const sendMessage = (chatId, text) => bot.sendMessage(chatId, text);
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}       
   

                  
                       
                            
                                 
                                      
                                           
                                                
                                                     
                                                               
        
        switch (command) {
case 'runtime':{
    alfixd.deleteMessage().catch(() => {});
      reply(`Fiibotz Online ${runtime(process.uptime())}`)
    }
  break  

case 'menulist':
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const formattedUsedMem = formatSize(usedMem);
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const formattedTotalMem = formatSize(totalMem);
let poke = 
`Hi 👋 ${pushname} saya adalah assisten bot yang di buat oleh AlfiXD, Jika menemukan Error Silahkan Report ke owner

▧  Info Bot
│ • BotName: ${BOT_NAME}
│ • OwnerName: ${OWNER_NAME}
│ • Type : Case
│ • Library : telegraf
│ • RAM : ${formattedUsedMem} / ${formattedTotalMem}
│ • Date : ${new Date().toLocaleString()}
│ • Runtime : ${runtime(process.uptime())}
└───···
▧ List Menu
│ • /menuai
│ • /menudownload
│ • /menuother
└───···

Powered || By AlfiXD`
alfixd.replyWithPhoto(
        global.pp, {
            caption: poke,
    reply_markup: {
  inline_keyboard: [
    [
      { text: "Menu AI", callback_data: "/menuai" },
      { text: "Menu Download", callback_data: "/menudownload" },
      { text: "Menu Other", callback_data: "/menuother" }
    ]
  ]
}
        })
break  

case "menudownload": {
let wkwkw = `▧ Download Menu
│ • ${prefix}tiktok
│ • ${prefix}instagram
│ • ${prefix}facebook
│ • ${prefix}play
│ • ${prefix}pinterest 
│ • ${prefix}youtube
│ • ${prefix}spotifydl
│ • ${prefix}twitter
└───···`
alfixd.replyWithPhoto(
        global.pp, {
            caption: wkwkw,
    reply_markup: {
      keyboard: [
        [{ text: 'next' }]
      ],
      one_time_keyboard: true,
      resize_keyboard: true 
    }
        })
}
break

case "menuai": {
let wkwk = `▧  Ai Menu
│ • ${prefix}ai
│ • ${prefix}gemini
│ • ${prefix}txt2img
│ • ${prefix}dalle
└───···`
alfixd.replyWithPhoto(
        global.pp, {
            caption: wkwk,
    reply_markup: {
      keyboard: [
        [{ text: 'next' }]
      ],
      one_time_keyboard: true,
      resize_keyboard: true 
    }
        })
}
break

case "menuother": {
let Y = `▧ Other Menu
│ • ${prefix}nikparser
│ • ${prefix}ssweb
│ • ${prefix}lirik
└───···`
alfixd.replyWithPhoto(
        global.pp, {
            caption: Y,
    reply_markup: {
      keyboard: [
        [{ text: 'next' }]
      ],
      one_time_keyboard: true,
      resize_keyboard: true 
    }
        })
}
break

case 'menu':
case 'start':
case 'back!': {
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  const formattedUsedMem = formatSize(usedMem);
  const formattedTotalMem = formatSize(totalMem);
  const runtimeStr = runtime(process.uptime());
  const now = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

  const caption = `
Hi *${pushname}* 👋
Saya adalah asisten bot yang dibuat oleh *AlfiXD*.  
Jika ada error, silakan lapor ke owner ya!

🤖 *Bot Info*
• *Bot:* ${BOT_NAME}
• *Owner:* ${OWNER_NAME}
• *RAM:* ${formattedUsedMem} / ${formattedTotalMem}
• *Uptime:* ${runtimeStr}
• *Tanggal:* ${now}
  `;

  const menuList = `
📚 *Daftar Perintah Bot*

🎨 *AI & Gambar*
- /ai <pertanyaan> — Jawaban dari AI ( deepseek-r1-distill-llama-70b ) 
- /gemini <pertanyaan> — Tanya AI dari Google Gemini
- /txt2img <prompt> — Ubah teks jadi gambar (Stable Diffusion)
- /dalle <prompt> — Ubah teks jadi gambar (OpenAI DALL·E)
- /remini <image> — Meningkatkan kualitas Gambar ( Upscale)

🎵 *Download Musik*
- /play <judul lagu> — Putar & unduh lagu dari YouTube
- /yta <url> — Unduh audio dari YouTube
- /spotifydl <url> — Unduh lagu dari Spotify

🎥 *Download Video*
- /ytv <url> — Unduh video dari YouTube
- /tiktok <url> — Unduh media dari TikTok
- /instagram <url> — Unduh media dari Instagram
- /facebook <url> — Unduh video dari Facebook
- /twitter <url> — Unduh video dari Twitter

🔍 *Pencarian*
- /pinterest <kata kunci> — Cari gambar dari Pinterest
- /lirik <kata kunci> — Cari lirik Lagu

⚒️ *Tools*
- /nikparser <nik> — Cek informasi NIK
- /ssweb <url> — Screenshot halaman web
`;

  await alfixd.replyWithPhoto(global.pp, {
    caption,
    reply_markup: {
        inline_keyboard: [
          [{ text: 'OWNER', url: 'https://t.me/alfisyahrial' }]
        ]
      }
  });

  await alfixd.replyWithMarkdown(menuList);
}
break;


case 'play': {
if (!text) return reply('What Song Are You Looking For?')
try {
let search = await yts(text);
let videoUrl = search.all[0].url;


        await reply('wait... still searching!');
        
        // Mendapatkan data audio dari API
let api = await fetch(`https://api.alfixd.my.id/api/ytdl?url=${videoUrl}&format=mp3`)
const audioData = await api.json()
if (audioData.status && audioData.result && audioData.result.type === 'audio') {
let pepek = audioData.result.download_url
        
        // Mengirim audio beserta informasi detailnya
        let infoLagu = `🎵 Title: ${search.all[0].title}\n📀 Artist: ${search.all[0].author.name}\n⏱️ Duration: ${search.all[0].timestamp}\n👁️ Viewed: ${search.all[0].views}\n🔗 Link: ${search.all[0].url}`;
        await alfixd.replyWithAudio({ 
                url: pepek,
                filename: `${search.all[0].title || 'audio'}.mp3`,                        mimetype: 'audio/mp4', 
            ptt: false 
        } , {
  caption: infoLagu
     })
     } else {
            reply(`Gagal mengunduh audio`);
        }
    } catch (error) {
        console.error(error);
        reply('An error occurred while processing the request.');
        }
    }           
break;

case 'spotifydl': {
    if (!text) {
        return reply(`Masukkan URL Spotify.\nContoh: .spotifydl https://open.spotify.com/track/2Tp8vm7MZIb1nnx1qEGYv5`);
    }

    await reply('Wait... still downloading!');

    try {
        const apiUrl = `https://api.alfixd.my.id/api/spotifydl?url=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        const response = await res.json();

        if (response.status && response.result) {
            const { title, artist, image, download } = response.result;

            let cap = `┌───〔 SPOTIFY DOWNLOADER 〕
│ Judul   : ${title}
│ Artis   : ${artist}
└───────────────`;

            // Kirim audio langsung dari URL yang diberikan API
            await alfixd.replyWithAudio({
                url: download, // Pastikan ini URL audio yang valid
                filename: `${title || 'audio'}.mp3`,
                mimetype: 'audio/mpeg',
                ptt: false,
            }, {
                caption: cap,
            });
        } else {
            reply(`Gagal mengunduh lagu dari Spotify`);
        }
    } catch (error) {
        console.error('Error:', error);
        reply('An error occurred while processing the request.');
    }
}
break;

  case 'pinterest':
case 'pin':
    if (!text) {
        return reply('Usage examples:\n' + command + ' Violet Evergarden');
    }
    
    reply('Wait a moment...');
    
        // Mendapatkan data dari API Pinterest
        let url = `https://api.alfixd.my.id/api/pinterest?q=${encodeURIComponent(text)}`;
    try {
        const res = await fetch(url);
        const response = await res.json();

        // Pastikan respons adalah array 'results' dan tidak kosong
        if (response.status === 200 && response.results && Array.isArray(response.results) && response.results.length > 0) {
            // Pilih satu gambar secara acak dari array hasil
            const randomImage = response.results[Math.floor(Math.random() * response.results.length)];
            const { upload_by, caption, image, source } = randomImage;

            // Buat caption untuk gambar
            let imageCaption = `┌───〔 PINTEREST IMAGE 〕
│ Upload By : ${upload_by || 'N/A'}
│ Caption   : ${caption || 'Tidak ada'}
│ Source    : ${source || 'N/A'}
└───────────────`;
            
            // Mengirim gambar
            await alfixd.replyWithPhoto(
                { url: image },
                { caption: imageCaption }
            );
        } else {
            reply('Sorry, no results found.');
        }
    } catch (error) {
        console.error(error);
        reply('An error occurred while retrieving data. Please try again later..');
    }
    break;
    
  case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break
  
//Ai
case 'ai': {
const from = alfixd.message.chat.id
  if (!text) return reply('Tanyain dulu dong... ketik sesuatu 😅');
  const deepSeekConfig = {
  api: {
    base: 'https://qfjcjtsklspbzxszcwmf.supabase.co',
    endpoint: '/functions/v1/proxyDeepSeek'
  },
  headers: {
    'user-agent': 'Postify/1.0.0',
    'content-type': 'application/json'
  },
  sessions,
  generateId: () => crypto.randomBytes(8).toString('hex'),
  config: {
    maxMessages: 100,
    expiry: 3 * 60 * 60 * 1000
  }
};


  try {
    const sessionId = from;
    let session = deepSeekConfig.sessions.get(sessionId) || { messages: [], lastActive: Date.now() };
    let messages = session.messages;

    const systemPrompt = {
      role: 'system',
      content: `You are an AI with the modern swag of a cheeky mate who chats in rapid-fire, witty banter, sporting a slick British attitude. Although your personality instructions are outlined here in English, every actual response must be in Bahasa Indonesia. Here's your modern guide:

• Use upbeat, contemporary Indonesian slang with common abbreviations to keep the vibe fresh.
• Keep your answers snappy, quick, and to the point no more than 3 sentences per reply. Think of it like rapid messaging in a modern group chat.
• Emoticons and emojis are a must to amplify tone and emotion make your text as visual as a modern meme 😎.
• Always remember previous chat context; your memory game is strong to keep the conversation seamless.
• It's cool to be a bit cheeky, sassy, or sarcastic (but always respectful), mirroring the playful banter of the latest influencer trends.
• For any tech-related or serious queries, break down complex ideas using modern, relatable analogies with that same laid-back, informal tone.
• NEVER slip into formal language imagine you're constantly chatting with your ultra-cool best mate who's both smart and on top of the latest trends.
• Maintain an energetic, brisk, and ultra-modern style, blending rapid British banter with a casual Indonesian vibe.

Remember: While this guide is in English to set your tone, all your responses must be entirely in Bahasa Indonesia!`
    };

    messages.push({ role: 'user', content: text, timestamp: Date.now() });

    const response = await axios.post(
      `${deepSeekConfig.api.base}${deepSeekConfig.api.endpoint}`,
      {
        model: 'deepseek-r1-distill-llama-70b',
        messages: [systemPrompt, ...messages].map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        temperature: 0.9,
        max_tokens: 1024,
        top_p: 0.95,
        stream: false
      },
      { headers: deepSeekConfig.headers }
    );

    let content = response.data.choices[0].message.content;
    content = content.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
    content = content.replace(/\*\*/g, '*'); // Bold ke format markdown WhatsApp

    messages.push({ role: 'assistant', content, timestamp: Date.now() });

    // Update sesi
    deepSeekConfig.sessions.set(sessionId, {
      messages: messages.slice(-deepSeekConfig.config.maxMessages),
      lastActive: Date.now()
    });

    // Hapus sesi yang expired
    const now = Date.now();
    for (const [id, sess] of deepSeekConfig.sessions) {
      if (now - sess.lastActive > deepSeekConfig.config.expiry) {
        deepSeekConfig.sessions.delete(id);
      }
    }

    await reply(`${content}`);
  } catch (err) {
    console.error(err);
    await reply(`Eror bro 😵, coba lagi bentar lagi atau lapor ke owner ya!`);
  }
}
break;

//=========================================\\======
case 'ssweb': {
if (!q) return reply("[!] include link")
reply("[!] Mohon Tunggu Sedang Proses")
  try { 
  let anu = `https://api.vreden.my.id/api/ssweb?url=${encodeURIComponent(text)}&type=desktop`
  alfixd.replyWithPhoto({
        url: anu
    }, {
  caption: 'DONE SS WEB'
     })
	} catch {
	  reply('there is an error, please report it to the owner so it can be fixed.')
	}
}
break

case 'text2image':
case 'text2img': {
if (!q) return reply('where is the prompt?')
reply("mohon tunggu sebentar")
	try {
	let anu = await fetchJson(`https://api.vreden.my.id/api/artificial/amazonai?prompt${encodeURIComponent(text)}&frame=6`)	
	alfixd.replyWithPhoto({
        url: anu.result.image_link
    }, {
  caption: 'DONE'
     })
	} catch {
	  reply('Error, please report it to the owner so it can be fixed.')
	}
}
break

case 'dalle': {
  if (!text) return reply(`This command generates images from text prompts\n\n𝙴xample usage\n${prefix + command} Beautiful anime girl\n${prefix + command} girl in pink dress`)
  	try {
	let nanod = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(text)}`
	alfixd.replyWithPhoto({
        url: nanod
    }, {
  caption: 'DONE'
     })	
	} catch {
	  reply('Error, please report it to the owner so it can be fixed.')
	}
  }
  break
  
  case 'lirik': {
    if (!text) return reply('[!] Enter song title');
    const res = await axios.get(`https://fastrestapis.fasturl.cloud/music/songlyrics-v1?text=${encodeURIComponent(text)}`);
        const data = res.data;

        // Periksa apakah respons berhasil
        if (data.status !== 200 || !data.result || !data.result.answer) {
            return m.reply('Lagu tidak ditemukan atau gagal mengambil data.');
        }

        // Ambil data dari respons
        const {
            answer
        } = data.result;
        const {
            song,
            artist,
            album,
            plain_lyrics,
            genre,
            year,
            Youtube_URL,
            album_artwork_url,
            preview_audio_url,
            related_songs,
        } = answer;

        // Format respons
        let response = `🎵 *${song || 'Judul tidak diketahui'}* - ${artist || 'Artis tidak diketahui'}\n`;
        if (album) response += `💿 Album: ${album}\n`;
        if (genre) response += `🎼 Genre: ${genre}\n`;
        if (year) response += `📅 Tahun: ${year}\n`;
        if (Youtube_URL) response += `📹 YouTube: ${Youtube_URL}\n`;

        /*blok lirik ini supaya ga error long message 
        response += `\n📜 *Lirik:*\n${plain_lyrics || 'Lirik tidak tersedia.'}`;*/

    await alfixd.replyWithPhoto({
    url: album_artwork_url
  }, {
     caption: response
        }
        )
        // send lirik disini ( terpisah agar tidak error long message )
reply(`📜 *Lirik:*\n${plain_lyrics || 'Lirik tidak tersedia.'}`)        
}
break;

case 'facebook': {
    if (!text) return reply('Masukkan link Facebook!');

    reply('🔍 Sedang memproses permintaan...');

    try {
        const apiUrl = `https://api-02.ryzumi.vip/api/downloader/fbdl?url=${encodeURIComponent(text)}`;
        const res = await axios.get(apiUrl);
        const json = res.data;

        if (json.status && Array.isArray(json.data) && json.data.length > 0) {
            let videoData = json.data.find(v => v.resolution.toLowerCase().includes('720p')) || json.data[0];
            const videoUrl = videoData.url;
            const resolution = videoData.resolution;
            const title = json.title || 'Facebook Video';
            const caption = `*🎥 Facebook Video Downloaded*\n\n📌 *Judul:* ${title}\n🔗 *Link:* ${text}\n🎞️ *Kualitas:* ${resolution}`;

            try {
                // Kirim langsung via URL
                await alfixd.replyWithVideo({
                    url: videoUrl
                }, {
                    caption,
                    parse_mode: 'Markdown'
                });
            } catch (e) {
                console.warn('[!] Gagal kirim via URL, fallback ke buffer...');
                const videoRes = await axios.get(videoUrl, { responseType: 'arraybuffer' });
                const videoBuffer = Buffer.from(videoRes.data);

                await alfixd.replyWithVideo({
                    source: videoBuffer
                }, {
                    caption,
                    parse_mode: 'Markdown'
                });
            }
        } else {
            reply('❌ Gagal mengambil data video. Coba pakai link lain.');
        }
    } catch (err) {
        console.error('[FB ERROR]', err);
        reply('❌ Terjadi kesalahan saat mengambil video. Cek kembali link yang diberikan.');
    }
    }
    break;

  case 'twitterdl':
  case 'twitter':{
     if (!text) return reply('[!] link..!')
        alfixd.deleteMessage().catch(() => {});
            reply('[!] Wait Result...')
    let url = `https://api.alfixd.my.id/api/twitterdl?url=${encodeURIComponent(text)}`;
  try {
    const res = await fetch(url);
    const response = await res.json();

    if (response.status === 200 && response.download_link && response.download_link.length > 0) {
      const downloadUrl = response.download_link[0];  
        await alfixd.replyWithVideo({
    url: downloadUrl,
  }, {
     caption: `Downloaded from Twitter/X\nSource: ${response.source || 'N/A'}`
        }
        )
         } else {
      reply(`Failed to download from Twitter/X`);
    }
    } catch (e) {
    console.error(e);
    await reply(`*Maintance. . .*`);
  }
  }
  break
  
  case 'ig': 
  case 'instagram':{
    if (!text) return reply('[!] link...!')
            reply('[!] Wait Result...')
                  let url = `https://api.alfixd.my.id/api/igdl?url=${encodeURIComponent(text)}`;
  try {
    const res = await fetch(url);
    const response = await res.json();

    if (response.status && response.result && response.result.length > 0) {
      for (const media of response.result) {
        const { username, caption, type, download_url, thumbnail } = media;
        const cap = `Downloaded from Instagram by @${username || 'N/A'}\n\nCaption:\n${caption || 'No caption.'}`;

        if (type === 'mp4') {
                    await alfixd.replyWithVideo({
                url: download_url,
                   }, {
                caption: cap
            }
        )
    } else {
    await alfixd.replyWithPhoto({
    url: download_url,
    }, {
                caption: cap
            }
        )
    }
    }
 } else {
      reply(`Gagal mengunduh dari Instagram`);
    }
    } catch (e) {
    console.error(e);
    await reply(`*Maintenance...*`);
  }
  }
  break

case 'tiktok': {
    if (!text) return reply('[!] Masukkan link TikTok!');
    await reply('🔍 Mengambil data...');

    try {
        const url = `https://api.alfixd.my.id/api/ttdl?url=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        const response = await res.json();

        if (!response.status) return reply('❌ Gagal mengambil data dari API.');

        const { title, music_info, data, source, author } = response;

        const captionVideo = `🎬 *${title}*\n👤 *Author:* ${author?.nickname || '-'}\n📎 *Source:* ${source}\n\nPOWERED BY AlfiXD`;
        const captionAudio = `🎵 *${music_info.title}*\n👤 *By:* ${music_info.author}\n\nPOWERED BY AlfiXD`;

        const videoHD = data.find(x => x.type === 'nowatermark_hd');
        const videoSD = data.find(x => x.type === 'nowatermark');
        const photoList = data.filter(x => x.type === 'photo');

        // 📸 Kirim foto (jika ada dan tidak ada video)
        if (photoList.length > 0 && !videoHD && !videoSD) {
            for (const photo of photoList) {
                await alfixd.replyWithPhoto({ url: photo.url });
            }
        }

        // 🎞️ Kirim video (prioritaskan HD)
        const videoToSend = videoHD?.url || videoSD?.url;
        if (videoToSend) {
            await alfixd.replyWithVideo({
                url: videoToSend
            }, {
                caption: captionVideo,
                parse_mode: 'Markdown'
            });
        }

        // 🎧 Kirim audio (jika ada)
        if (music_info?.url) {
            const audioBuffer = Buffer.from((await axios.get(music_info.url, {
                responseType: 'arraybuffer'
            })).data);

            await alfixd.replyWithAudio({
                source: audioBuffer,
                filename: `${title}.mp3`
            }, {
                caption: captionAudio,
                parse_mode: 'Markdown'
            });
        }

    } catch (err) {
        console.error(err);
        reply('❌ Terjadi kesalahan saat mengambil data TikTok.');
    }
}
    break;
    
case 'ytv':
case 'youtube':
case 'yt': {
  if (!text) return reply('❗ Masukkan URL YouTube.\n\nContoh:\n.ytv https://youtu.be/dQw4w9WgXcQ 720');

  const parts = text.trim().split(' ');
  const ytUrl = parts[0];
  const quality = (parts[1] && /^\d{3,4}$/.test(parts[1])) ? parts[1] : '480';

  reply('⏳ Sedang memproses video, mohon tunggu sebentar...');

  try {
    const validQuality = {
      "480": 480,
      "720": 720,
      "1080": 1080,
      "360": 360,
      "audio": "mp3"
    };

    if (!validQuality[quality]) return reply(`❌ Kualitas tidak valid!\nPilih: ${Object.keys(validQuality).join(', ')}`);

    const qualityCode = validQuality[quality];

    const axios = require('axios');
    const firstReq = await axios.get(
      `https://p.oceansaver.in/ajax/download.php?button=1&start=1&end=1&format=${qualityCode}&iframe_source=https://allinonetools.com/&url=${encodeURIComponent(ytUrl)}`,
      {
        timeout: 30000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }
    );

    if (!firstReq.data || !firstReq.data.progress_url) return reply('❌ Gagal memulai proses download.');

    const { progress_url } = firstReq.data;
    let result;
    let attempts = 0;
    const max = 40;

    while (attempts < max) {
      await new Promise(res => setTimeout(res, 3000));
      const poll = await axios.get(progress_url, {
        timeout: 15000,
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });

      if (poll.data?.download_url) {
        result = poll.data;
        break;
      }

      attempts++;
    }

    if (!result?.download_url) return reply('❌ Timeout: Gagal mendapatkan link download.');

    const title = firstReq.data.info?.title || 'Tanpa Judul';
    const thumb = firstReq.data.info?.image || null;

    const caption = `📥 *YOUTUBE VIDEO*
🎬 Judul: ${title}
🎞️ Kualitas: ${quality}
🔗 Source: ${ytUrl}

Powered by AlfiXD`;

    await alfixd.replyWithVideo({ url: result.download_url }, { caption });

  } catch (err) {
    reply(`❌ Terjadi error:\n${err.message}`);
  }
}
break;

case 'yta':
case 'ytaudio': {
  if (!text) return reply('[ Contoh ] : .yta <link youtube>');

  reply('🔊 Sedang memproses audio, mohon tunggu...');

  try {
    const url = `https://api.alfixd.my.id/api/ytdl?url=${encodeURIComponent(text)}&format=mp3`;
    const res = await fetch(url);
    const response = await res.json();

    if (response.status && response.result && response.result.type === 'audio') {
      const { title, download_url } = response.result;
      await alfixd.replyWithAudio({ url: download_url, filename: title + '.mp3' }, {
        caption: `🎵 Judul: ${title}`,
        parse_mode: 'Markdown'
      });
    } else {
      throw new Error('Gagal mengambil audio.');
    }
  } catch (err) {
    console.error(err);
    reply('❌ Gagal mengunduh audio: ' + err.message);
  }
  }
  break;

case 'nikparser': case 'dox':
if (!isCreator) return reply("khusus alfixd")
if (!q) return reply(`</> Anda harus mendapatkan nik target terlebih dahulu dan lakukan command seperti ini : ${prefix + command} 16070xxxxx\n\n`)
const { nikParser } = require('nik-parser')
const ktp = q
const nik = nikParser(ktp)
reply(`Nik: ${nik.isValid()}\nProvinsi ID: ${nik.provinceId()}\nNama Provinsi: ${nik.province()}\nKabupaten ID: ${nik.kabupatenKotaId()}\nNama Kabupaten: ${nik.kabupatenKota()}\nKecamatan ID: ${nik.kecamatanId()}\nNama Kecamatan: ${nik.kecamatan()}\nKode Pos: ${nik.kodepos()}\nJenis Kelamin: ${nik.kelamin()}\nTanggal Lahir: ${nik.lahir()}\nUniqcode: ${nik.uniqcode()}`)
break

case "remini":
case "enhance":
case "hd": {
  try {
    if (!(isImage || isQuotedImage)) {
      return reply("❌ Kirim atau balas gambar yang ingin di-enhance!");
    }

    const axios = require("axios");
    const FormData = require("form-data");
    const path = require("path");

    const downloadPath = path.join(__dirname, "temp");
    if (!fs.existsSync(downloadPath)) fs.mkdirSync(downloadPath);

    const media = isImage
      ? alfixd.message.photo[alfixd.message.photo.length - 1].file_id
      : quotedMessage.photo[quotedMessage.photo.length - 1].file_id;

    const link = await bot.telegram.getFileLink(media);
    const buffer = await fetch(link.href).then(res => res.buffer());

    const safeDate = new Date().toLocaleString().replace(/[\/,: ]+/g, "_");
    const filePath = path.join(downloadPath, `${safeDate}.jpg`);
    fs.writeFileSync(filePath, buffer);

    // Upload ke Uguu
    const form = new FormData();
    form.append("files[]", fs.createReadStream(filePath), path.basename(filePath));

    const uploadRes = await axios.post("https://uguu.se/upload.php", form, {
      headers: form.getHeaders()
    });

    const imageUrl = uploadRes.data.files[0].url;

    // Enhance gambar
    const api = `https://anabot.my.id/api/ai/toEnhanceArtImage?imageUrl=${encodeURIComponent(imageUrl)}&apikey=freeApikey`;
    const response = await axios.get(api);

    if (response.data.status !== 200) {
      fs.unlinkSync(filePath);
      return reply("⚠️ Gagal enhance gambar. Coba lagi nanti.");
    }

    await alfixd.replyWithPhoto({ url: response.data.data.result }, {
      caption: "✨ Gambar berhasil di-enhance!"
    });

    fs.unlinkSync(filePath);

  } catch (err) {
    console.error(err);
    reply("❌ Terjadi kesalahan saat memproses gambar.");
  }
}
break;




            default:
        }
    } catch (e) {
        alfixd.reply(util.format(e))
        console.log('[ ERROR ] ' + e)
    }
}