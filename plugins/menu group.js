let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let imageUrl = 'https://telegra.ph/file/813c8a430f1d5d034f954.png'
  let { name } = global.db.data.users[who]
  m.react('🪔')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
*【..≼قــســم الجروبات≽..】*
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
*📖🕯⤺┇〘جروبي〙*
*📖🕯⤺┇〘معلوم_الجروب〙*
*📖🕯⤺┇〘منشن〙*
*📖🕯⤺┇〘مخفي〙*
*📖🕯⤺┇〘طرد〙*
*📖🕯⤺┇〘اضافه〙*
*📖🕯⤺┇〘ترقيه〙*
*📖🕯⤺┇〘خفض〙*
*📖🕯⤺┇〘حذف〙*
*📖🕯⤺┇〘جروب〙*
*📖🕯⤺┇〘تغير_المغادره〙*
*📖🕯⤺┇〘تغير_الدخول〙*
*📖🕯⤺┇〘تغييرالصورة〙*
*📖🕯⤺┇〘تغيير_الوصف〙*
*📖🕯⤺┇〘تغيير_الاسم〙*
*📖🕯⤺┇〘لينك〙*
*📖🕯⤺┇〘رستر〙*
*📖🕯⤺┇〘المشرفين〙*
*📖🕯⤺┇〘انذار〙*
*📖🕯⤺┇〘الغاء_الانذار〙*
*📖🕯⤺┇〘الانذارات〙*
                    ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
`
  conn.sendMessage(m.chat, {
    image: { url: imageUrl }, 
    caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['5']

export default handler
