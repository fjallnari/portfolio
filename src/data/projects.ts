const PROJECTS = [
    {
        id: 'ttrpg-compass',
        title: 'TTRPG Compass',
        body: 'Tool to easily browse and compare ttrpg systems with stellar charts and filters',
        from: '2023',
        tags: ['svelte', 'tailwind', 'go', 'redis']
    },
    {
        id: 'shadowtorch',
        title: 'Shadowtorch',
        body: 'Ambient torch tracker for the Shadowdark TTRPG with multiple themes',
        from: '2023',
        tags: ['svelte', 'tailwind']
    },
    {
        id: 'morii-vtt',
        title: 'Morii VTT',
        body: 'Half-vtt (i.e. no maps) for playing TTRPGs. It currently supports D&D 5E, Cairn and Shadowdark.',
        from: '2022',
        to: '2023',
        tags: ['svelte', 'node', 'mongodb']
    },
    {
        id: 'gw2-cartographer',
        title: 'GW2 Cartographer',
        body: 'Tool to generate high resolution Guild Wars 2 maps from the official API tiles.',
        from: '2022',
        to: '2023',
        tags: ['svelte', 'tailwind', 'canvas', 'cloudinary']
    },
    {
        id: 'spotter-bot',
        title: 'Spotter Bot',
        body: 'A GW2 discord bot, uses official API to provide detailed info about dailies, fractals, PSNA and more. It also features basic account management system with a command for weekly cleared raids.',
        from: '2021',
        to: '2022',
        tags: ['node', 'discord', 'mongodb']
    }
];

export default PROJECTS;
