import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

// @jaketanda and @strong-pointer
const botOwners = ['109060566210859008', '215594590135255040']

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
        featuresDir: path.join(__dirname, 'features'),
        typeScript: true,
        testServers: [process.env.TESTGUILD!],
        mongoUri: process.env.MONGO_URI,
        botOwners: botOwners
    })
})

client.login(process.env.TOKEN)
