module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    client.user.setActivity({
      type: 'WATCHING',
      name: "/ping | By DerpyDev"
      });
    console.log('logged in!')
  },
};
