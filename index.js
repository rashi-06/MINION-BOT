console.log("Hello there!!!");

require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.token);

//The ready state
client.on("ready", botIsReady);

function botIsReady() {
	console.log("Hi I am Ready :)");
}

//replying to the msg
const commandHandler = require("./commands.js");

client.on("message", commandHandler);

client.on("messageDelete", (msg) => {
	msg.reply("Why are you deleting messages?");
});
