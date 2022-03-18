const Discord = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { footer, normal, error } = require('../../config/embed.json');
const { MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
  .setName("")
  .setDescription(""),
  async execute(interaction, client) {
    //code
	},
};