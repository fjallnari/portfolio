import type ProjectInterface from "../interfaces/ProjectInterface";

const PROJECTS: ProjectInterface[] = [
    {
        id: 'ttrpg-compass',
        title: 'TTRPG Compass',
        description: 'Tool to easily browse and compare TTRPG systems with stellar charts and filters',
        writeup: `*Lorem ipsum dolor sit amet*, consectetur adipiscing elit. **In eu diam nisl.**  \n # why are we here? \n vulputate leo, ut vestibulum dolor egestas eu. Nullam in dolor in arcu iaculis commodo ac ac odio. Duis sodales nisi semper ligula sodales, eget aliquet nulla vestibulum. Aenean id orci varius, aliquet purus vitae, condimentum est. Vivamus vestibulum arcu rhoncus, tincidunt nunc a, eleifend quam. Vestibulum at lacus congue enim rhoncus dapibus. Aliquam blandit luctus ligula, vitae malesuada ante egestas at. Proin feugiat venenatis purus, vel consequat nisl bibendum a. Sed hendrerit hendrerit nibh, quis congue ligula consequat nec.`,
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
        writeup: `*Shadowtorch* is a simple torch-keeping tool for the tabletop RPG called [Shadowdark](https://www.thearcanelibrary.com/pages/shadowdark). It is essentially an app which allows users to keep track of multiple timers. The design is focused on the old-school feeling of the game and kept simple and intuitive for users in how it mirrors a media player. I’ve worked on it alone, but the animated torch frames were made by [@nyk_nck](https://nyknck.itch.io/) and the fire ambience is by *Mixit*. It's deployed on Vercel using SvelteKit's **adapter-auto**.  \n
It was well received by the community with many users providing valuable feedback and features they wished for. There were 4 most requested features, all of which I've implemented afterwards. First was to add a blowout sound when torch runs out – adds suspense for players. Second one was to have a downloadable Android/iOS app, third was to add a global 10 min decrement for active torches (game-specific reasons), and last but not least to have multiple themes to choose from.  \n
The mobile app proved little bit more difficult, at first I first tried Tauri but its use for mobile apps was still in alpha then and far from polished. I’ve also tried PWA, but it didn't work well with precaching audio. In the end I’ve settled on Capacitor and it worked almost out of the box - the .apk (Android app) is available as a Github release.`,
        from: '2023',
        repo: 'https://github.com/fjallnari/shadowtorch',
        website: 'https://shadowtorch.vercel.app/',
        android: 'https://github.com/fjallnari/shadowtorch/releases/tag/android-v.1.1.0',
        tags: ['svelte', 'tailwind', 'capacitor'],
        images: ['ambient', 'settings', 'overview']
    },
    {
        id: 'morii-vtt',
        title: 'Morii VTT',
        description: 'Half-vtt (i.e. no maps) for playing tabletop RPGs. It currently supports D&D 5E, Cairn and Shadowdark.',
        writeup: '',
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
        writeup: '',
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
        description: 'A Guild Wars 2 Discord bot, uses official API to provide detailed info about dailies, fractals, PSNA and more.',
        writeup: '',
        from: '2021',
        to: '2022',
        repo: 'https://github.com/nevermore-org/spotter-bot',
        website: '',
        tags: ['node', 'discord', 'mongodb'],
        images: []
    }
];

export default PROJECTS;