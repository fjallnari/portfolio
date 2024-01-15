import type ProjectInterface from "../interfaces/ProjectInterface";

const PROJECTS: ProjectInterface[] = [
    {
        id: 'ttrpg-compass',
        title: 'TTRPG Compass',
        description: 'Website to easily browse and compare TTRPG systems with stellar charts and filters',
        writeup: ``,
        from: '2023',
        repo: 'https://github.com/fjallnari/ttrpg-compass',
        website: 'https://compass.fjallnari.com/',
        tags: ['svelte', 'tailwind', 'go', 'redis', 'python'],
        images: ['similarity', 'filters', 'simple'],
        type: 'dev'
    },
    {
        id: 'shadowtorch',
        title: 'Shadowtorch',
        description: 'Ambient torch tracker for the Shadowdark TTRPG with multiple themes',
        writeup: `*Shadowtorch* is a simple torch-keeping tool for the tabletop RPG called [Shadowdark](https://www.thearcanelibrary.com/pages/shadowdark). It is essentially an app  to keep track of multiple timers. The design is focused on the old-school feeling of the game and kept simple and intuitive for users in how it mirrors a media player. I’ve worked on it alone, but the animated torch frames were made by [@nyk_nck](https://nyknck.itch.io/) and the fire ambiance is by *Mixit*. It's deployed on Vercel using SvelteKit's **adapter-auto**.
    \nIt was well received by the community with many users providing valuable feedback and features they wished for. There were 4 most requested features, all of which I implemented afterward. The first was to add a blowout sound when the torch runs out – adds suspense for players. The second one was to have a downloadable Android/iOS app, the third was to add a global 10-minute decrement for active torches (game-specific reasons), and last but not least to have multiple themes to choose from.
    \nThe mobile app proved a little bit more difficult, at first I tried Tauri but its use for mobile apps was still in alpha then and far from polished. I’ve also tried PWA, but it didn't work well with precaching audio. In the end, I’ve settled on Capacitor and it worked almost out of the box - the .apk (Android app) is available as a Github release.`,
        from: '2023',
        repo: 'https://github.com/fjallnari/shadowtorch',
        website: 'https://shadowtorch.vercel.app/',
        android: 'https://github.com/fjallnari/shadowtorch/releases/tag/android-v.1.1.0',
        tags: ['svelte', 'tailwind', 'capacitor'],
        images: ['showcase'],
        type: 'dev'
    },
    {
        id: 'morii-vtt',
        title: 'Morii VTT',
        description: 'A real-time half-vtt (i.e. no maps) for playing tabletop RPGs. Currently supports D&D 5E, Cairn and Shadowdark.',
        writeup: `My largest full-stack project so far, with quite a few moving parts. I've started it as a way to improve in Svelte, and learned a lot of new things and techniques with it. Most of the work was focused on designing & creating user-friendly interfaces + dashboards and real-time sockets-based communication/sheet updates. The technical stack itself isn't all that interesting, the backend consists of a Node.js Express server + simple Socket.io server setup basically as a relay. Auth is handled through a custom JWT implementation. The database I've used is MongoDB & the frontend is SPA in Svelte. Deployment is setup using Dockerfiles & run on a VPS through Dokku.
        \nVTTs (virtual tabletop) for TTRPGs (tabletop RPGs) serve as a way for users to comfortably play their games in real time over the net. Morii VTT provides campaign management, live games with editable character sheets, chat with dice rolling and GM (game master) overviews of useful information/specific mechanics. The character sheets themselves have fully incorporated dice rolling. Overall, I've tried to maintain the traditional look & feel of paper-based sheets while offering a better UX in a clean minimal design. For brevity, I've detailed all the features in the project [README](https://github.com/fjallnari/morii-vtt/blob/main/README.md).`,
        from: '2022',
        to: '2023',
        repo: 'https://github.com/fjallnari/morii-vtt',
        website: 'https://moriivtt.com/',
        tags: ['svelte', 'node', 'mongodb', 'socketio'],
        images: ['morii-5e-sheet', 'morii-gm-view', 'cairn-sheet', 'cairn-gm-view',  'morii-quick-create', 'shadowdark-sheet'],
        type: 'dev'
    },
    {
        id: 'gw2-cartographer',
        title: 'GW2 Cartographer',
        description: 'Tool to generate high resolution Guild Wars 2 maps from the official API tiles',
        writeup: `This web app generates high-resolution Guild Wars 2 maps from official API tiles and map information. There are three modes of generation based on the amount of different information (base image, image + icons, image + icons + labels). It first checks whether or not the requested image is already cached and if not it assembles the image from tiles in Canvas, uploads it to Cloudinary through their API, and sends it back to the client. The map generation REST backend is written in Typescript using a simple Node.js server which also serves the client.`,
        from: '2022',
        to: '2023',
        repo: 'https://github.com/fjallnari/gw2-cartographer',
        website: 'https://gw2-cartographer.fjallnari.com/',
        tags: ['svelte', 'tailwind', 'canvas'],
        images: ['imap-tangled-depths', 'fmap-auric-basin', 'bmap-vabbi'],
        type: 'dev'
    },
    {
        id: 'terramem',
        title: 'Terramem',
        description: 'Brand design for a fictional far-future company that provides monthly subscription boxes with experiences from bygone eras.',
        writeup: `This project was one of of the assignments of GDII, first we were to think up a fictional company (with focus on one of our childhood dream-professions) and give it a suitable name. From mixing the dream of wanting to be an explorer and the genre of cyberpunk came the idea of a company in a far-future in which all that remains of flowers and trees are fading memories, a company which would provide wealthy subscribers with monthly boxes of a fully-fledged virtual experience of times long gone.\n\nThe name *terramem* is a simple mash-up of *terra* + *mem*, latin words for the Earth and memory respectively - memory/remembrance of Earth.`,
        tags: [],
        images: ['guidelines', 'logo-concept', 'clear-space', 'colors', 'color-variants', 'secondary'],
        type: 'design'
    },
    {
        id: 'ape-alliance',
        title: 'Ape Alliance',
        description: 'Design of supporting materials for a fictional organization that aims to protect and preserve apes.',
        writeup: `Another assignment for GDII, this time we were to design supporting materials for a fictional organization that another student designed. I've been given a brand manual for Ape Alliance (a non-profit focused on protecting and helping various apes) and tasked with designing business cards, envelopes, simple socials posts & website. As the brand design is corporate in nature, one of the challenges was to have the supporting materials be either more light-hearted or having a natural vibe to better promote the brand mission. I went with minimalist flat design to honour the manual accented with cut-out ape silhouettes greeting the viewer in comics bubbles.`,
        tags: [],
        images: ['card-black.jpg', 'socials.jpg', 'envelope.jpg'],
        type: 'design'
    },
    // {
    //     id: 'spotter-bot',
    //     title: 'Spotter Bot',
    //     description: 'A Guild Wars 2 Discord bot, uses official API to provide detailed info about dailies, fractals, PSNA and more.',
    //     writeup: `Spotter Bot is Guild Wars 2 Discord bot, started with a friend when we needed a bot to send daily fractals regularly. Uses official API to provide detailed information about daily in-game things as as dailies, fractal instabilities, PSNA, and more. I've also implemented user authentication via API keys with various levels of access and set up command scaffolding using Hygen templates to quickly generate boilerplate for new commands.
    // \nIt uses the Discord.js library for the actual bot parts and is built on Node.js with MongoDB as the primary DB, which is automatically refreshed each day from the API. Dailies are sent periodically through Discord webhooks.`,
    //     from: '2021',
    //     to: '2022',
    //     repo: 'https://github.com/nevermore-org/spotter-bot',
    //     website: '',
    //     tags: ['node', 'discord', 'mongodb'],
    //     images: []
    // }
];

export default PROJECTS;