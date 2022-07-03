import { ICommand } from "wokcommands"

export default {
    category: 'Testing',
    description: 'Pong!',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return 'Pong! :ping_pong:'
    }
} as ICommand