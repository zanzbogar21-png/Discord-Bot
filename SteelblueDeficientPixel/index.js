const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Bot je aktiven 24/7!"));
app.listen(3000, () => console.log("Web server je vklopljen"));

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Bot je online kot ${client.user.tag}`);
  client.user.setPresence({
    activities: [{ name: '24/7' }],
    status: 'online',
  });
});

client.login(process.env.TOKEN);
