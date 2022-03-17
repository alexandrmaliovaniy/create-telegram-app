import 'dotenv/config';
import {Bot} from "telegram-framework";
import SessionStorage from "./storages/Session.storage";
import main from "./routers/main.router";

const TOKEN = process.env.TELEGRAM_TOKEN;
const STORAGE = new SessionStorage();

const bot = new Bot(TOKEN, STORAGE, {polling: true});

bot.use('/', main);