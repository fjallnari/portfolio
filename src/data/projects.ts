import type ProjectInterface from "../interfaces/ProjectInterface";

const PROJECTS: ProjectInterface[] = [
    {
        id: 'ttrpg-compass',
        title: 'TTRPG Compass',
        description: 'Tool to easily browse and compare ttrpg systems with stellar charts and filters',
        body: `*Lorem ipsum dolor sit amet*, consectetur adipiscing elit. **In eu diam nisl.**  \n # why are we here? \n vulputate leo, ut vestibulum dolor egestas eu. Nullam in dolor in arcu iaculis commodo ac ac odio. Duis sodales nisi semper ligula sodales, eget aliquet nulla vestibulum. Aenean id orci varius, aliquet purus vitae, condimentum est. Vivamus vestibulum arcu rhoncus, tincidunt nunc a, eleifend quam. Vestibulum at lacus congue enim rhoncus dapibus. Aliquam blandit luctus ligula, vitae malesuada ante egestas at. Proin feugiat venenatis purus, vel consequat nisl bibendum a. Sed hendrerit hendrerit nibh, quis congue ligula consequat nec.`,
        from: '2023',
        repo: 'https://github.com/fjallnari/ttrpg-compass',
        website: 'https://compass.fjallnari.com/',
        tags: ['svelte', 'tailwind', 'go', 'redis', 'python'],
        images: ['similarity', 'filters', 'simple']
    },
    {
        id: 'shadowtorch',
        title: 'Shadowtorch',
        description: 'Ambient torch tracker for the *Shadowdark* TTRPG with multiple themes',
        body: `Shadowtorch is a simple torch-keeping tool for the tabletop RPG called *Shadowdark*. It is essentially an app which allows users to keep track of multiple timers. The design is focused on the old-school feeling of the game and kept simple and intuitive for users in how it mirrors a media player. I’ve worked on it alone, but the animated torch frames were made by *@nyk_nck* (https://nyknck.itch.io/) and the fire ambience is by *Mixit*. It's deployed on Vercel using SvelteKit's **adapter-auto**.  \n
*Shadowdark* was (at the time of creating this app) one of the newest systems and was also well regarded by the TTRPG playerbase for both its respect for old style of games and fresh ideas – such as real time torch tracking to put pressure on players. Before its release, there weren’t many reasons to keep track of multiple timers. All this combined meant that there was a huge demand in the among the game's fans to have such tool.  \n
This tool was well received by the community with many users providing valuable feedback and features they wished for. There were 4 most requested features. Add a blowout sound when torch runs out – adds suspense for players. Second one was to have a downloadable Android/iOS app and third was to add a global 10 min decrement for active torches (game-specific reasons). I’ve added a blowout sound, simple decrement button and 9 varied themes.  \n
The mobile app proved little bit more difficult, at first I first tried Tauri but it was pain to setup as its use for mobile apps is still in alpha and far from polished. I’ve also tried PWA, but it doesn’t work well with precaching audio. In the end I’ve settled on Capacitor and it worked almost out of the box - the .apk (Android app) is available as a Github release.`,
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
        description: 'Half-vtt (i.e. no maps) for playing tabletop RPGs. It currently supports D&D 5E, Cairn and *Shadowdark*.',
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