# bunbotJs
A re-write of [bunbot](https://github.com/ronald-so/bunbot) using JavaScript built using [discord.js](https://discord.js.org/#/). bunbotJs is a bot that adds some functionality to Discord, such as bigger emoji and Google search.

# Features
* Current features
  * Large emoji
  * Image search
  * YouTube video search
  * Animated emoji (even if you don't have a Discord nitro subscription)
  
* Planned features
  - [ ] Math/equation support
  - [ ] Allow bot reload from command
  - [ ] Google text search
  - [ ] Avatar change from command
  - [ ] Web panel to upload custom emoji and commands
  - [ ] `help` command


# Requirements
Requires an installation of Node.js and npm, which can be downloaded [here](https://nodejs.org/en/download/).

After installation, open Terminal/command prompt/PowerShell in the bunbotJs directory and run:

`npm install discord.js request`

which installs the required dependencies for the bot ([discord.js](https://www.npmjs.com/package/discord.js), [request](https://www.npmjs.com/package/request)).

# Configuration
To make full use of the bot, access to the following API/keys are required:
* [Google CSE](https://developers.google.com/custom-search/)
* [Discord](https://discordapp.com/developers/docs/intro)
  * Get a bot token by following the link -> create new app -> create bot user -> token

Open the `config.json` file and replace the corresponding values with your key/token!

# How to use
Simply type `!bunjs <command> <arg>` while the bot is running on your Discord server. The following commands are available:

* `!bunjs emoji` - Lists all emoji currently available on the bot.
* `!bunjs <emojiname> <arg>` - Bot will send an emoji. Optional argument `l` or `a` after the emoji name for large/animated emojis (if applicable)
* `!bunjs give <keyword>` - Finds a random image on Google based on the keyword
* `!bunjs vid <keyword>` - Finds a random video on YouTube based on the keyword
