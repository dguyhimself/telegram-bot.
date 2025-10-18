import express from "express";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Telegram commands
bot.start((ctx) => ctx.reply("🚀 Bot is online!"));
bot.on("text", (ctx) => ctx.reply(`You said: ${ctx.message.text}`));

// Launch bot
bot.launch();
console.log("✅ Bot started");

// Keep-alive web server
app.get("/", (req, res) => res.send("Bot is running fine ✅"));
app.listen(3000, () => console.log("🌐 Web server running on port 3000"));
