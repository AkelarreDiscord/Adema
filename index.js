console.log('Franco ha resucitado');
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
bot.on('message', (message) => {
	if (message.content == 'Arriba España') {
		message.channel.sendMessage('Muera el mal gobierno');
	}
	if ((message.content == 'Visca Catalunya') || (message.content == 'Visca Catalunya lliure i soberana') || (message.content == 'Gora Euskadi ta askatasuna')) {
		message.channel.sendMessage('¡Separata! a galeras que vas.');
	}
	if (message.author.tag == 'Nico888#2350') {
		message.channel.sendMessage('¡Troll! Arderas en el infierno.');
	}
});
bot.login(token).catch(err => console.log(err));
