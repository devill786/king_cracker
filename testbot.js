const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token from BotFather
const botToken = '6656308475:AAERW3_5Ius6Op70u5gFa-zexD1UYMiLSME';
const bot = new TelegramBot(botToken, { polling: true });

// Listen for the /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Send a welcome message
  bot.sendMessage(chatId, 'Welcome, we are online now!');
});

// Log errors to the console
bot.on('polling_error', (error) => {
  console.error(error.code);  // => 'EFATAL'
});

// Log errors to the console
bot.on('webhook_error', (error) => {
  console.error(error.code);  // => 'EPARSE'
});

// Log when the bot is ready
bot.on('polling_error', (error) => {
  console.error(error.code);
});

// Enable promise cancellation manually
bot._polling.abort = () => {
  // Implement the abortion logic if needed
};

console.log('Bot is running...');
