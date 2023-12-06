<script lang="ts">
    import Icon from "@iconify/svelte";
    import type ProjectInterface from "../../interfaces/ProjectInterface";

    export let project: ProjectInterface | undefined;

    const linkInfo = [
        {
            link: project?.website, 
            icon: 'mdi:web',
            title: 'Website'
        }, 
        {
            link: project?.repo, 
            icon: 'mdi:github',
            title: 'Source code'
        },
        {
            link: project?.android,
            icon: 'mingcute:android-fill',
            title: 'Android app'
        }
    ]

</script>

<div class="flex flex-row flex-wrap gap-4 text-alabaster">
    {#each linkInfo as { link, icon }}
        {#if link && link != ''}
            <a href={link} class="flex justify-center items-centeractive:bg-oxford-750 cursor-pointer hover:text-oxford-300 transition-colors">
                <Icon icon={icon} class="text-4xl"/>
            </a>
        {/if}
    {/each}
</div>