const {
  SlashCommandBuilder
} = require('@discordjs/builders');
const {
  footer,
  normal,
  error
} = require('../../config/embed.json');
const {
  MessageButton,
  MessageEmbed,
  MessageActionRow
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
	.setName("")
	.setDescription(""),
  async execute(interaction, client) {
       //code
  },
};
