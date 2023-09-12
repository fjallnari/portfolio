const TAGS: Record<string, { title: string, color: string, icon: string }> = {
    'svelte': {
        title: 'Svelte',
        color: '#ff3e00',
        icon: 'vscode-icons:file-type-svelte',
    },
    'node': {
        title: 'Node.js',
        color: '#026e00',
        icon: 'vscode-icons:file-type-node',
    },
    'mongodb': {
        title: 'MongoDB',
        color: '#13aa52',
        icon: 'vscode-icons:file-type-mongo',
    },
    'go': {
        title: 'Go',
        color: '#00a2ff',
        icon: 'vscode-icons:file-type-go',
    },
    'redis': {
        title: 'Redis',
        color: '#ff0000',
        icon: 'devicon:redis',
    },
    'tailwind': {
        title: 'Tailwind',
        color: '#06b6d4',
        icon: 'vscode-icons:file-type-tailwind',
    }
}

export default TAGS;