let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/65cfc6dd32215a624e9dc.mp4'
  let { name } = global.db.data.users[who]
  m.react('💎')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
【..≼قــســم البنك≥..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄

*📖🕯⤺┇〘البنك〙*
*📖🕯⤺┇〘راتب〙*
*📖🕯⤺┇〘هجوم〙*
*📖🕯⤺┇〘يومي〙*
*📖🕯⤺┇〘تحويل〙*
*📖🕯⤺┇〘رصيدي〙*
*📖🕯⤺┇〘الماس〙*
*📖🕯⤺┇〘ليدر〙*
*📖🕯⤺┇〘غامر〙*
*📖🕯⤺┇〘علاج〙*
*📖🕯⤺┇〘تعدين〙*
*📖🕯⤺┇〘تعدين2〙*
*📖🕯⤺┇〘عمل〙*
*📖🕯⤺┇〘تسجيل〙*
*📖🕯⤺┇〘الغاء_التسجيل〙*
*📖🕯⤺┇〘ايدي〙*
*📖🕯⤺┇〘كشف〙*
*📖🕯⤺┇〘لفل〙*
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
handler.command = ['3']

export default handler
