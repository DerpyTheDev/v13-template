const fs = require('fs');

module.exports = (client) => {
  client.handleButtons = async () => {
    const buttonsFolders = fs.readdirSync('./src/buttons');

    for (const folder of buttonsFolders) {
      const buttonsFiles = fs.readdirSync(`./src/buttons/${folder}`).filter(file => file.endsWith('js'));
      for (const file of buttonsFiles) {
        const button = require(`../buttons/${folder}/${file}`);
        client.buttons.set(button.data.name, button)
      }
    }
  }
}