let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/d3f644175fc8ec076cb69.mp4'
  let { name } = global.db.data.users[who]
  m.react('👑')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
【..≼قــســم المطور≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄

📖🕯⤺┇〘بان〙
📖🕯⤺┇〘بانفك〙
📖🕯⤺┇〘بانشات〙
📖🕯⤺┇〘بانشاتفك〙
📖🕯⤺┇〘حطهابروفايل〙
📖🕯⤺┇〘ضيفالماس〙
📖🕯⤺┇〘ضيفاكسبي〙
📖🕯⤺┇〘اعاده〙
📖🕯⤺┇〘اخرج〙
📖🕯⤺┇〘ادخل〙
📖🕯⤺┇〘تهكير〙
📖🕯⤺┇〘تنظيف〙
📖🕯⤺┇〘الامردا〙
📖🕯⤺┇〘البلوكات〙
📖🕯⤺┇〘فكالبلوك〙
📖🕯⤺┇〘بلوك〙
📖🕯⤺┇〘بريم〙
📖🕯⤺┇〘حذف_بريم〙
📖🕯⤺┇〘المميزين〙
📖🕯⤺┇〘تسريع〙
📖🕯⤺┇〘نشر〙
📖🕯⤺┇〘اعدام〙
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
handler.command = ['10']
handler.rowner = true
export default handler
