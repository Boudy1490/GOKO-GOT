let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `⌯ ضــيــف كــود الــبــكــج`, m)
    if (args[0] == 'ViOlEt' || args[0] == 'CaSpEr' || args[0] == 'ViOtEr' || args[0] == 'تست') {

        conn.reply(m.chat, '*🎉 مــبــارك :\n⌯ هــدايــاك هـــي\n1000000 خــبــره ✨\n -100 مـــاس 🎫\n10 مــال 💹\n10 رصــيدك الـبـنكـي 💳\n100 عــمــلات 🪙\n2 طــعام حـيـوانـات 🍖\n50 أسطوري 🧰\n1 طــعام روبوت 🤖', m)
        global.db.data.users[m.sender].exp += 1000000
        global.db.data.users[m.sender].limit -= 100
        global.db.data.users[m.sender].money += 10
        global.db.data.users[m.sender].gold += 100
        global.db.data.users[m.sender].legendary += 50
        global.db.data.users[m.sender].atm += 10
        global.db.data.users[m.sender].robo += 1
        global.db.data.users[m.sender].petFood += 2
    } else {
        conn.reply(m.chat, `[⚡]⌯ كــود خــاطــئ يــمــكــنك الحـصول عــلي الــاكواد مـن الـمـطور`, m)
    } 
}

handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(بكج)$/i

export default handler 
