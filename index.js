const telegramBot = require("node-telegram-bot-api")
const token = '1181526310:AAFNIDtaqTNE8Ulng-DanWyAf96m0pcqSgY';
const bot = new telegramBot(token,{polling: true})

bot.on('message',msg=>{
bot.sendMessage(msg.chat.id,"Hello! I am working for you :)")
})