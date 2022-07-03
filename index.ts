import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
})

client.on('ready', () => {
    console.log('Xanke is ready!')

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: [process.env.TESTGUILD!]
    })
})

client.login(process.env.TOKEN)