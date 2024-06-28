   import { createHash } from 'crypto'
   import PhoneNumber from 'awesome-phonenumber'
   import { canLevelUp, xpRange } from '../lib/levelling.js'
   import fetch from 'node-fetch'
   import fs from 'fs'
   const { levelling } = '../lib/levelling.js'
   import moment from 'moment-timezone'
   import { promises } from 'fs'
   import { join } from 'path'
   const time = moment.tz('Egypt').format('HH')
   let wib = moment.tz('Egypt').format('HH:mm:ss')
   //import db from '../lib/database.js'

   let handler = async (m, { conn, usedPrefix, command}) => {
       let d = new Date(new Date + 3600000)
       let locale = 'en'
       let week = d.toLocaleDateString(locale, { weekday: 'long' })
       let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
       let _uptime = process.uptime() * 1000
       let uptime = clockString(_uptime)
   let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
   if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات الخاصة بي`
   let imageUrl = 'https://telegra.ph/file/015df9a45f42d189d40dd.jpg'
   let user = global.db.data.users[who]
   let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
   let { min, xp, max } = xpRange(user.level, global.multiplier)
   let username = conn.getName(who)
   let math = max - xp
   let prem = global.prems.includes(who.split`@`[0])
   let sn = createHash('md5').update(who).digest('hex')
   let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
   let more = String.fromCharCode(8206)
   m.react('📜')
   let readMore = more.repeat(850) 
   let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
   let str = `
*┓━ ╼━━━╃⌬〔 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  〕⌬╄━━━╾ ━┏*
🕯┇❯ مـرحــبـا بــك یــا  ${taguser}

*❄️⃝📖━━ •┇✦كـل الأوامـر✦┇• ━━📖⃝❄️*

*【..≼قــســم الدين≽..】*
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
*📖⤺┇〘اية_الكرسي〙*
*📖⤺┇〘دين〙*
────── • 〄 • ──────
*【..≼قــســم الذكاء الاصطناعي≽..】*
⋄━───═◞⬪⋇⬪◟═───━⋄
*📖🕯⤺┇〘فيوليت〙*
*📖🕯⤺┇〘بارد〙*
*📖🕯⤺┇〘نانو〙*
*📖🕯⤺┇〘بوت〙*
*📖🕯⤺┇〘شوف〙*
*📖🕯⤺┇〘شادو〙*
*📖🕯⤺┇〘تست〙*
*📖🕯⤺┇〘دحيح〙*
*📖🕯⤺┇〘بلاك〙*
*📖🕯⤺┇〘ديكس〙*
────── • 〄 • ──────
*【..≼قــســم البنك≥..】*
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
────── • 〄 • ──────
*【..≼قــســم الترفيه≽..】*
⋄━───═◞⬪⋇⬪◟═───━⋄
*📖🕯⤺┇〘اكس_او〙*
*📖🕯⤺┇〘اكس-حذف〙*
*📖🕯⤺┇〘جريمة〙*
*📖🕯⤺┇〘تحدي〙*
*📖🕯⤺┇〘حرب〙*
*📖🕯⤺┇〘احزر〙*
*📖🕯⤺┇〘تويت〙*
*📖🕯⤺┇〘اسألني〙*
*📖🕯⤺┇〘كت〙*
*📖🕯⤺┇〘سلاحي〙*
*📖🕯⤺┇〘علم〙*
*📖🕯⤺┇〘نصايح〙*
*📖🕯⤺┇〘عين〙*
*📖🕯⤺┇〘عكس〙*
*📖🕯⤺┇〘الغام〙*
*📖🕯⤺┇〘تويت〙*
*📖🕯⤺┇〘فزورة〙*
*📖🕯⤺┇〘حرف〙*
*📖🕯⤺┇〘خمن〙*
*📖🕯⤺┇〘صراحة〙*
*📖🕯⤺┇〘فكك〙*
*📖🕯⤺┇〘دين〙*
*📖🕯⤺┇〘تخمين〙*
*📖🕯⤺┇〘العاب〙*
*📖🕯⤺┇〘تحداني〙*
*📖🕯⤺┇〘فعالية〙*
────── • 〄 • ──────
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
────── • 〄 • ──────
*【..≼قــســم الأدوات≽..】*
⋄━───═◞⬪⋇⬪◟═───━⋄
*📖🕯⤺┇〘لرابط〙*
*📖🕯⤺┇〘باركود〙*
*📖🕯⤺┇〘ترجم〙*
*📖🕯⤺┇〘فضح〙*
*📖🕯⤺┇〘تكرار〙*
*📖🕯⤺┇〘بريد〙*
*📖🕯⤺┇〘قص〙*
*📖🕯⤺┇〘احسب〙*
*📖🕯⤺┇〘جودة〙*
*📖🕯⤺┇〘واتس〙*
*📖🕯⤺┇〘مطلوب〙*
────── • 〄 • ──────
*【..≼قــســم الأعضاء≽..】*
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
────── • 〄 • ──────
*【..≼قــســم التحويلات≽..】*
⋄━───═◞⬪⋇⬪◟═───━⋄
*📖🕯⤺┇〘ملصق〙*
*📖🕯⤺┇〘حقوق〙*
*📖🕯⤺┇〘لصورة〙*
*📖🕯⤺┇〘لفيديو〙*
*📖🕯⤺┇〘دمج〙*
*📖🕯⤺┇〘تليجراف〙*
*📖🕯⤺┇〘تيلجرام〙*
*📖🕯⤺┇〘ستك〙*
*📖🕯⤺┇〘نرد〙*
────── • 〄 • ──────
*【..≼قــســم التحميلات≽..】*
⋄━───═◞⬪⋇⬪◟═───━⋄
*📖🕯⤺┇〘فيديو〙*
*📖🕯⤺┇〘صوت〙*
*📖🕯⤺┇〘شغل〙*
*📖🕯⤺┇〘صورة〙*
*📖🕯⤺┇〘بحث〙*
*📖🕯⤺┇〘تيك〙*
*📖🕯⤺┇〘تيك_صور〙*
*📖🕯⤺┇〘يوتيوب〙*
*📖🕯⤺┇〘فيس〙*
*📖🕯⤺┇〘انستا〙*
*📖🕯⤺┇〘تطبيق〙*
*📖🕯⤺┇〘جيف〙*
*📖🕯⤺┇〘جوجل〙*
*📖🕯⤺┇〘تويتر〙*
*📖🕯⤺┇〘فيلم〙*
*┛━ ╼━━━╃⌬〔 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  〕⌬╄━━━╾ ━┗*
   `.trim()
       conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };
   handler.help = ['main']
   handler.command = ['المهام'] 

   export default handler
   function clockString(ms) {
       let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
       let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
       let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
       return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

       function ucapan() {
         const time = moment.tz('Egypt').format('HH')
         let res = " ☀️"
         if (time >= 4) {
           res = " 🌄"
         }
         if (time >= 10) {
           res = " ☀️"
         }
         if (time >= 15) {
           res = " 🌇"
         }
         if (time >= 18) {
           res = " 🌙"
         }
         return res
       }
