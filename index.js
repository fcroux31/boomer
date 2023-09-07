const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token } = require('./config.json');

const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.DirectMessages
]})

client.once('ready', () => {
    console.log('Ready!');
});

let phrases = [];

try {
    const phrasesData = fs.readFileSync('./phrases.json');
    phrases = JSON.parse(phrasesData);
} catch (err) {
    console.error('Erreur lecture phrases.json', err);
}

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix)) {
        return;
    }    
    if (message.content.startsWith(prefix + "alexia")){
        const randomIndex = Math.floor(Math.random() * phrases.length);
        const randomPhrase = phrases[randomIndex];
        if (randomPhrase) {
            message.channel.send(randomPhrase);
            return;
        }   
    }
    else {
        message.channel.send("Perdu...tu peux ressayer avec le bon préfixe ainsi que le prénom de la boomeuse ultime !");
        return;
    }
});

client.on('messageCreate', async message => {
    if (message.content.includes("chameau") && message.author.id == "1097466283764756570") {
    let url = 'https://media.tenor.com/_cEumE-qCeYAAAAC/camel-race.gif';
    message.channel.send(url);
    return;
}});

client.on('messageCreate', async message => {
    if (message.content.includes("sophie")) {
    let url2 = 'https://media.tenor.com/CAEyorifT40AAAAd/big-trouble-if-i-speak.gif';
    message.channel.send(url2);
    return;
}});

client.login(token);