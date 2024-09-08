const { Telegraf } = require('telegraf');

const bot = new Telegraf('7364826423:AAHNcqdPlDrSqZlkQ3tTjCg9ZA43ho6pQ2U');

bot.start((ctx) => ctx.reply(`Welcome !
Type /help for commands
Or Try sending a sticker
     `));
bot.help((ctx) => ctx.reply(`
    Use commands:
    /start : To start the bot
    /help : To know the commands
    /greet : To get greeting

    `))
bot.command('greet', (ctx) => {
    ctx.reply('Namaste Sir');
})


bot.on(('sticker'), (ctx) => ctx.reply('👍'))





bot.launch();