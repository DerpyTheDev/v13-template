const {
	Client,
	Intents,
	Collection
} = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS]
});
const fs = require('fs');
const e = require('./config/embed.json');
require('./server.js');

client.commands = new Collection();
client.buttons = new Collection();

const functions = fs.readdirSync("src/functions").filter(file => file.endsWith(".js"));
const eventsFiles = fs.readdirSync("src/events").filter(file => file.endsWith(".js"));
const commandFolder = fs.readdirSync("src/commands");

(async () => {
	for (file of functions) {
		require(`./functions/${file}`)(client);
	}
	client.handleEvents(eventsFiles, "/src/events");
	client.handleCommands(commandFolder, "src/commands");
	client.handleButtons();
	client.login(process.env.TOKEN);
})();