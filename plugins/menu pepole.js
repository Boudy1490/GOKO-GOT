let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/4f80b8feea4b0ad64e88f.png'
  let { name } = global.db.data.users[who]
  m.react('👥')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
*【..≼قــســم الاعضاء≽..】*
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
*📖🕯⤺┇〘اختفاء〙*
*📖🕯⤺┇〘ابلاغ〙*
*📖🕯⤺┇〘بوت〙*
*📖🕯⤺┇〘بينغ〙*
*📖🕯⤺┇〘بروفايل〙*
*📖🕯⤺┇〘خط〙*
*📖🕯⤺┇〘هل〙*
*📖🕯⤺┇〘منشني〙*
*📖🕯⤺┇〘توب〙*
*📖🕯⤺┇〘تصميم〙*
*📖🕯⤺┇〘المطور〙*
*📖🕯⤺┇〘تعليق〙*
*📖🕯⤺┇〘الدعم〙*
*📖🕯⤺┇〘الطقس〙*
*📖🕯⤺┇〘رابطي〙*
*📖🕯⤺┇〘السورس〙*
*📖🕯⤺┇〘المستخدمين〙*
*📖🕯⤺┇〘سيلفي〙*
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
handler.command = ['7']

export default handler
