let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  let imageUrl = 'https://telegra.ph/file/33dfde90b872532a79488.png';
  let name = conn.contacts[who] != undefined ? conn.contacts[who].vname || conn.contacts[who].notify : undefined;
  
  m.react('☪');
  
  let str = `
  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
  *【..≼قــســم الدين≽..】*
  ⋄━───═◞⬪⋇⬪◟═───━⋄
  *📖⤺┇〘اية_الكرسي〙*
  *📖⤺┇〘دين〙*
  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
  `;
  
  conn.sendMessage(m.chat, {
    image: { url: imageUrl }, 
    caption: str,
    mentions: [{ tag: name, id: who }],
    gifPlayback: true,
    gifAttribution: 0
  }, { quoted: m });
};

handler.help = ['main'];
handler.tags = ['group'];
handler.command = ['1'];

export default handler;
