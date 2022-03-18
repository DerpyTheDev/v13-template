const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const clientId = "949784282870710293";
const guildId = "915315410730102874";

module.exports = (client) => {
  client.handleCommands = async (commandFolder, path) => {
    client.commandArray = []
  for (folder of commandFolder) {
    const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandFiles) {
      const command = require(`../commands/${folder}/${file}`)
client.commands.set(command.data.name, command); client.commandArray.push(command.data.toJSON());
     }
   }
    const rest = new REST({
      version: '9'
    }).setToken(process.env.TOKEN);

    (async () => {
      try {
        console.log('Started refreshing slash commands.');

        await rest.put(
          Routes.applicationGuildCommands(clientId, guildId), {
            body: client.commandArray
          },
        );

        console.log('Slash commands loaded!');
      } catch (error) {
        console.error(error);
      }
    })();
  }
}