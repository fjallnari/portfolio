import type ProjectInterface from "../interfaces/ProjectInterface";

const PROJECTS: ProjectInterface[] = [
    {
        id: 'ttrpg-compass',
        title: 'TTRPG Compass',
        description: 'Tool to easily browse and compare ttrpg systems with stellar charts and filters',
        body: `*Lorem ipsum dolor sit amet*, consectetur adipiscing elit. **In eu diam nisl.**  \n # why? \n vulputate leo, ut vestibulum dolor egestas eu. Nullam in dolor in arcu iaculis commodo ac ac odio. Duis sodales nisi semper ligula sodales, eget aliquet nulla vestibulum. Aenean id orci varius, aliquet purus vitae, condimentum est. Vivamus vestibulum arcu rhoncus, tincidunt nunc a, eleifend quam. Vestibulum at lacus congue enim rhoncus dapibus. Aliquam blandit luctus ligula, vitae malesuada ante egestas at. Proin feugiat venenatis purus, vel consequat nisl bibendum a. Sed hendrerit hendrerit nibh, quis congue ligula consequat nec.`,
        from: '2023',
        repo: 'https://github.com/fjallnari/ttrpg-compass',
        website: 'https://compass.fjallnari.com/',
        tags: ['svelte', 'tailwind', 'go', 'redis', 'python'],
        images: ['similarity', 'filters', 'simple']
    },
    {
        id: 'shadowtorch',
        title: 'Shadowtorch',
        description: 'Ambient torch tracker for the Shadowdark TTRPG with multiple themes',
        body: '',
        from: '2023',
        repo: 'https://github.com/fjallnari/shadowtorch',
        website: 'https://shadowtorch.vercel.app/',
        tags: ['svelte', 'tailwind'],
        images: ['ambient', 'settings', 'overview']
    },
    {
        id: 'morii-vtt',
        title: 'Morii VTT',
        description: 'Half-vtt (i.e. no maps) for playing tabletop RPGs. It currently supports D&D 5E, Cairn and Shadowdark.',
        body: '',
        from: '2022',
        to: '2023',
        repo: 'https://github.com/fjallnari/morii-vtt',
        website: 'https://moriivtt.com/',
        tags: ['svelte', 'node', 'mongodb', 'socketio'],
        images: ['morii-5e-sheet', 'morii-gm-view', 'cairn-sheet', 'cairn-gm-view',  'morii-quick-create', 'shadowdark-sheet']
    },
    {
        id: 'gw2-cartographer',
        title: 'GW2 Cartographer',
        description: 'Tool to generate high resolution Guild Wars 2 maps from the official API tiles.',
        body: '',
        from: '2022',
        to: '2023',
        repo: 'https://github.com/fjallnari/gw2-cartographer',
        website: 'https://gw2-cartographer.fjallnari.com/',
        tags: ['svelte', 'tailwind', 'canvas'],
        images: ['imap-tangled-depths', 'fmap-auric-basin', 'bmap-vabbi']
    },
    {
        id: 'spotter-bot',
        title: 'Spotter Bot',
        description: 'A GW2 discord bot, uses official API to provide detailed info about dailies, fractals, PSNA and more.',
        body: '',
        from: '2021',
        to: '2022',
        repo: 'https://github.com/nevermore-org/spotter-bot',
        website: '',
        tags: ['node', 'discord', 'mongodb'],
        images: []
    }
];

export default PROJECTS;
