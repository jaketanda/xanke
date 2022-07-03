import { ICommand } from "wokcommands"

export default {
    category: 'Testing',
    description: 'Ping!',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return ':ping_pong: Ping!'
    }
} as ICommand