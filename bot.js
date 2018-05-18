// Load files and modules
const Discord = require('discord.js');
const request = require("request");
const config = require("./config.json");
const emoji = require("./emoji.json");

// Initialize bot
const bot = new Discord.Client();

// Discord bot token
const token = config.token;

// Bot command prefix
const prefix = "!bun";


// Commands

const commands = {
    give: { // Finds a random image given search query
        startCommand: function (msg, searchQuery) {
            const cseID = config.cseID;
            const cseKey = config.cseKey;
            const rand = Math.ceil(Math.random() * 30); // Pick random image from top n results
            const url = "https://www.googleapis.com/customsearch/v1?q=" + searchQuery + "&cx=" + cseID + "&num=1&safe=high&searchType=image&start=" + rand + "&key=" + cseKey;

            request(url, { json: true }, function (error, response, body) {
                if (!body.items) {
                    return;
                }
                msg.channel.send(emoji.bunbook + "\n" + body.items[0].link);
            });
        }
    },
    vid: { // Finds relevant youtube video
        startCommand: function (msg, searchQuery) {
            const cseKey = config.cseKey;
            const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=relevance&q=" + searchQuery + "&type=video&key=" + cseKey;
            const rand = Math.floor(Math.random() * 3);

            request(url, { json: true }, function (error, response, body) {
                if (!body.items[0]) {
                    return;
                }
                if (body.items[1] && body.items[2]) {
                    msg.channel.send(emoji.bunbook + "\n" + "https://www.youtube.com/watch?v=" + body.items[rand].id.videoId);
                } else {
                    msg.channel.send(emoji.bunbook + "\n" + "https://www.youtube.com/watch?v=" + body.items[0].id.videoId);
                }
            })
        }
    },
    emoji: { // List all emoji
        startCommand: function (msg) {
            msg.channel.send('```\nbun\nsleepy\nangry\neating\ncrying\npoo\nhi\npuke\nbook\nconfused\ndisco\nstar\ntilt\ncoffee\nsmile\nbeer\nbleh\ndrunk\nwink```')
        }
    },
    bun: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bun);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bun.png" });
            };
            if (arg == "a") {
                msg.channel.send("", { file: "images/bun.gif" });
            }
        }
    },
    sleepy: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunsleepy);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunsleepy.png" });
            }
        }
    },
    angry: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunangry);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunangry.png" });
            }
        }
    },
    eating: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.buneating);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/buneating.png" });
            }
        }
    },
    crying: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.buncrying);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/buncrying.png" });
            }
        }
    },
    poo: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunpoo);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunpoo.png" });
            }
        }
    },
    hi: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunhi);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunhi.png" });
            }
        }
    },
    puke: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunpuke);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunpuke.png" });
            }
        }
    },
    book: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunbook);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunbook.png" });
            }
        }
    },
    confused: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunconfused);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunconfused.png" });
            }
        }
    },
    disco: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bundisco);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bundisco.png" });
            }
        }
    },
    star: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunstar);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunstar.png" });
            }
        }
    },
    tilted: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.buntilted);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/buntilted.png" });
            }
        }
    },
    coffee: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.buncoffee);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/buncoffee.png" });
            }
        }
    },
    smile: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunsmile);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunsmile.png" });
            }
        }
    },
    beer: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunbeer);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunbeer.png" });
            }
        }
    },
    bleh: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunbleh);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunbleh.png" });
            }
        }
    },
    drunk: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bundrunk);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bundrunk.png" });
            }
        }
    },
    wink: {
        startCommand: function (msg, arg) {
            if (!arg) {
                msg.channel.send(emoji.bunwink);
            };
            if (arg == "l") {
                msg.channel.send("", { file: "images/bunwink.png" });
            }
        }
    }
}


// Listen for message
bot.on('message', message => {
    // Split prefix, args
    const cmd = message.content.slice(prefix.length).trimLeft().split(" ")[0];
    const arg = message.content.slice(prefix.length).trimLeft().split(" ").slice(1).join(" ");

    if (message.content.startsWith(prefix) && !message.author.bot) { // Takes input if sender is not a bot
        if (!cmd) {
            message.channel.send(emoji.bunconfused); // No commands entered
        } else {
            runCommand(message, cmd, arg); // Run command
        }
    }
});

// Run command function
function runCommand(inputMsg, inputCmd, inputArg) {
    if (!commands[inputCmd]) {
        return;
    }
    commands[inputCmd].startCommand(inputMsg, inputArg);
}

bot.login(token);
