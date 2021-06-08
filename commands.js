const fetch = require("node-fetch");

const replies = [
	"HEY!! Is this GRU??",
	"HELLO!!!",
	"HIII how are you???",
	"HEY :)",
	" 💓",
	"👋",
];

const ily_replies = [" 💓", "ily too :)", "🤟🏽", "😘"];

const ihy_replies = [" 😠", "That's so rude :(", "💔", "😒"];

module.exports = async function (msg) {
	if (msg.channel.id == "848915682644983828") 
    {
		let content = msg.content.split(" ");

		if (content[0] === "HeyMinion!")
        {
			const index = Math.floor(Math.random() * replies.length);
			// msg.reply("Hey Grue!!!!"); //It will reply by tagging the users.....
			msg.channel.send(replies[index]);
		}
        
        else if (content[0] === "!ily") 
        {
			const index = Math.floor(Math.random() * ily_replies.length);
			msg.reply(ily_replies[index]);
		} 

        else if (content[0] === "!ihy") 
        {
			const index = Math.floor(Math.random() * ihy_replies.length);
			msg.reply(ihy_replies[index]);
		} 
        
        else if (content[0] === "!gif") 
        {
			let search = "minions";

			if (content.length > 1) {
				search = content.slice(1, content.length).join(" ");
			}

			let gif_url = `https://g.tenor.com/v1/search?q=${search}&key=${process.env.teno_key}&contentfilter=high`;
			let responce = await fetch(gif_url);
			let json = await responce.json();
			let index = Math.floor(Math.random() * json.results.length);
			msg.channel.send(json.results[index].url);
		} 
        
        else if (content[0] === "!joke") 
        {
			let joke_url = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit`;
			let responce = await fetch(joke_url);
			let json = await responce.json();
			msg.channel.send(json.joke);
		}
	}
};
