const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token } = require('./config.json');

const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages
]})

let phrases = [];

try {
    const phrasesData = fs.readFileSync('./phrases.json');
    phrases = JSON.parse(phrasesData);
} catch (err) {
    console.error('Erreur lors de la lecture du fichier phrases.json', err);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
if (message.content.includes('=alexia')) {
    console.log('=alexia détecté');
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    if (randomPhrase) {
    message.channel.send(randomPhrase);
    } else {
    message.channel.send('Aucune phrase trouvée dans la base de données.');
    }
}
});

client.login(token);