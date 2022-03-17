require('dotenv').config();
const { Bot } = require('telegram-framework');
const SessionStorage = require('./storages/SessionStorage');
const main = require('./routers/main.router');

const TOKEN = process.env.TELEGRAM_TOKEN;
const STORAGE = new SessionStorage();

const bot = new Bot(TOKEN, STORAGE, {polling: true});

bot.use('/', main);