const { MessageEmbed } = require('discord.js');
const { normal, success, error, footer } = require('../config/embed.json');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {
if(interaction.isCommand()) {
if(!interaction.isCommand()) return;
const command = client.commands.get(interaction.commandName);
    if(!command) return;
    try {
      await command.execute(interaction) 
      } catch (error) {
      console.error(error)
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true
      });
    };
} else if (interaction.isSelectMenu()) {
const errore = new MessageEmbed()
.setTitle(':x: | An Error Occured')
.setColor(error)
.setFooter(footer);

const ex = new MessageEmbed()
  .setTitle(':white_check_mark:Code | Example Menu')
      .setColor(normal)
      .setFooter(footer);
  if(interaction.customId == 'example-menu') {
    if(interaction.values[0] == '1') return interaction.reply({
      embeds: [ex.setDescription(`${`\`\`\`js\nclient.on(\'ready\', () => {\nclient.user.setActivity({\ntype: \'WATCHING\',\nname: \'you sleep🤡\'\n 
   })\n}); \`\`\``}`).addField('\nDifferent "types"', 'WATCHING\nPLAYING\nSTREAMING\nCOMPETING\nLISTENING')],
      ephemeral: true
        });
    if(interaction.values[0] == '2') return interaction.reply({
      embeds: [ex.setDescription('\`\`\`js\nclient.on(\'messageCreate\', message => {\nif(message.content === \'!ping\') {\nmessage.reply(\'Pong!\')\n   }\n});\`\`\`')],
      ephemeral: true
       })
      }    
    } else if(interaction.isButton()) {
  const button = client.buttons.get(interaction.customId);
  if(!button) return await interaction.reply({
    content: 'there was no button found'
      })
  try {
      await button.execute(interaction) 
      } catch (error) {
      console.error(error)
      await interaction.reply({
        content: "There was an error while executing this button!",
        ephemeral: true
      });
  };
    }
  }
}