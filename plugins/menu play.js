let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/4a717e7678443cb885628.mp4'
  let { name } = global.db.data.users[who]
  m.react('🎮')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
【..≼قــســم الترفيه≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
📖🕯⤺┇〘اكس_او〙
📖🕯⤺┇〘اكس-حذف〙
📖🕯⤺┇〘جريمة〙
📖🕯⤺┇〘تحدي〙
📖🕯⤺┇〘حرب〙
📖🕯⤺┇〘احزر〙
📖🕯⤺┇〘تويت〙
📖🕯⤺┇〘اسألني〙
📖🕯⤺┇〘كت〙
📖🕯⤺┇〘سلاحي〙
📖🕯⤺┇〘علم〙
📖🕯⤺┇〘نصايح〙
📖🕯⤺┇〘عين〙
📖🕯⤺┇〘عكس〙
📖🕯⤺┇〘تويت〙
📖🕯⤺┇〘فزورة〙
📖🕯⤺┇〘حرف〙
📖🕯⤺┇〘خمن〙
📖🕯⤺┇〘صراحة〙
📖🕯⤺┇〘فكك〙
📖🕯⤺┇〘دين〙
📖🕯⤺┇〘تخمين〙
📖🕯⤺┇〘العاب〙
📖🕯⤺┇〘تحداني〙
📖🕯⤺┇〘فعالية〙
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
handler.command = ['الترفيه']

export default handler
