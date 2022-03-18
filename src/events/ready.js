module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    client.user.setActivity({
      type: 'WATCHING',
      name: "discordjs.guide | /"
      });
    console.log('logged in!')
  },
};