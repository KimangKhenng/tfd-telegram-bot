import 'dotenv/config';
import { Bot } from "grammy";
import { bold, fmt, hydrateReply, italic, link } from "@grammyjs/parse-mode";
import { run } from "@grammyjs/runner";

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(process.env.BOT_TOKEN);
// Install the plugin.
bot.use(hydrateReply);

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx) => {
    console.log(ctx.from)
    // Register telegram user in our database
    ctx.replyFmt(
        fmt(
            ["Hello\n", " and", " and \n", ""],
            fmt`${bold('@' + ctx.from.username)}\n`,
            fmt`${bold(italic("bitalic"))}`,
            fmt`${italic("italic")}`,
        ),
    );
});
bot.command("create_user", (ctx) => {
    ctx.replyWithMarkdownV2("*This* is _withMarkdown_ `formatting`")
});
// Handle other messages.
bot.on("message", (ctx) => {
    console.log(ctx.from)
    console.log(ctx.msg.text)
    // Telegram response to the message
    ctx.replyWithHTML(
        "<b>This</b> is <i>withHTML</i> <code>formatting</code><b>This</b> is <i>withHTML</i> <code>formatting</code>",
    );
});

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

const runner = run(bot);

// Stopping the bot when the Node.js process
// is about to be terminated
const stopRunner = () => runner.isRunning() && runner.stop();
process.once("SIGINT", stopRunner);
process.once("SIGTERM", stopRunner);