let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/73fd2daa9dca15ae5db80.mp4'
  let { name } = global.db.data.users[who]
  m.react('🤖')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
【..≼قــســم الذكاء الاصطناعي≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
📖🕯⤺┇〘بارد〙
📖🕯⤺┇〘فيوليت〙
📖🕯⤺┇〘بلاك〙
📖🕯⤺┇〘نانو〙
📖🕯⤺┇〘بوت〙
📖🕯⤺┇〘شوف〙
📖🕯⤺┇〘غوكو〙
📖🕯⤺┇〘تست〙
                    ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['ذكاءاصطناعي']

export default handler
